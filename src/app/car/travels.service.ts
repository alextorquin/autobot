import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';
import { Travel } from '../core/store/models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  private readonly travelsUrl: string = environment.apiUrl + 'priv/travels';

  constructor(private http: HttpClient) {}

  public getCarTravelByCar$ = (car: Car): Observable<Travel> =>
    this.http.get<Travel>(this.getUrlTravel(car));
  public postCarTravel$ = (car: Car): Observable<Travel> =>
    this.http.post<Travel>(this.travelsUrl, this.getTravel(car));
  public putCarTravel$ = (car: Car): Observable<Travel> =>
    this.http.put<Travel>(this.getUrlTravel(car), this.getTravel(car));
  public deleteCarTravel$ = (car: Car): Observable<void> =>
    this.http.delete<void>(this.getUrlTravel(car));

  private getUrlTravel = (car: Car): string =>
    `${this.travelsUrl}/${this.getTravelId(car)}`;
  private getTravel = (car: Car): Travel => {
    return {
      _id: this.getTravelId(car),
      currentSpeed: car.currentSpeed,
      remainingBattery: car.remainingBattery,
      distanceTraveled: car.distanceTraveled,
      owner: car.owner
    };
  };

  private getTravelId = (car: Car): string => `${car.link.routerLink}`;
}
