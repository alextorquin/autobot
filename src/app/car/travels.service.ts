import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';
import { Travel } from '../core/store/models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  private readonly travelsUrl = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient) {}

  public getTravel$ = (car: Car): Observable<Travel> =>
    this.http
      .get<Travel>(this.getUrlTravel(car)) // Try to get travel
      .pipe(
        catchError((err: HttpErrorResponse) => this.onGetTravelError(err, car)) // on No Travel
      );
  public postTravel$ = (car: Car): Observable<Travel> => this.http.post<Travel>(this.travelsUrl, this.getCarTravel(car));
  public putTravel$ = (car: Car): Observable<Travel> => this.http.put<Travel>(this.getUrlTravel(car), this.getCarTravel(car));
  public deleteTravel$ = (car: Car): Observable<void> => this.http.delete<void>(this.getUrlTravel(car));

  private getUrlTravel = (car: Car): string => `${this.travelsUrl}/${this.getTravelId(car)}`;

  private getCarTravel = (car: Car) => {
    return {
      _id: this.getTravelId(car),
      currentSpeed: car.currentSpeed,
      remainingBattery: car.remainingBattery,
      distanceTraveled: car.distanceTraveled
    };
  };
  public setCarTravel = (car: Car, travel: Travel) => {
    car.currentSpeed = travel.currentSpeed;
    car.remainingBattery = travel.remainingBattery;
    car.distanceTraveled = travel.distanceTraveled;
  };
  private getTravelId = (car: Car) => `@${car.link.routerLink}`;

  private onGetTravelError = (err: HttpErrorResponse, car: Car) =>
    err.status === 404 ? this.postTravel$(car) : throwError(err); // Save new if not found
}
