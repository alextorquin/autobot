import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';
import { Travel } from '../core/store/models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  private readonly travelsUrl: string = environment.apiUrl + 'priv/items';

  constructor(private http: HttpClient) {}

  public getCarTravel$ = (car: Car): Observable<Car> =>
    this.tryGetTravel$(car).pipe(
      catchError((err: HttpErrorResponse): Observable<Travel> => this.postIfNotFound(err, car)),
      map((travel: Travel): Car => this.getCarWithTravel(car, travel))
    );
  public postCarTravel$ = (car: Car): Observable<Travel> => this.http.post<Travel>(this.travelsUrl, this.getTravel(car));
  public putCarTravel$ = (car: Car): Observable<Travel> => this.http.put<Travel>(this.getUrlTravel(car), this.getTravel(car));
  public deleteCarTravel$ = (car: Car): Observable<void> => this.http.delete<void>(this.getUrlTravel(car));

  private tryGetTravel$ = (car: Car): Observable<Travel> => this.http.get<Travel>(this.getUrlTravel(car));
  private getUrlTravel = (car: Car): string => `${this.travelsUrl}/${this.getTravelId(car)}`;
  private getTravel = (car: Car): Travel => {
    return {
      _id: this.getTravelId(car),
      currentSpeed: car.currentSpeed,
      remainingBattery: car.remainingBattery,
      distanceTraveled: car.distanceTraveled
    };
  };
  private getCarWithTravel = (car: Car, travel: Travel): Car => {
    car.currentSpeed = travel.currentSpeed;
    car.remainingBattery = travel.remainingBattery;
    car.distanceTraveled = travel.distanceTraveled;
    return car;
  };
  private getTravelId = (car: Car): string => `@${car.link.routerLink}`;
  private postIfNotFound = (err: HttpErrorResponse, car: Car): Observable<Travel> =>
    err.status === 404 ? this.postCarTravel$(car) : throwError(err);
}
