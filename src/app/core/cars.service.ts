import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Car } from './store/models/car.model';
import { Travel } from './store/models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private readonly carsUrl = environment.assetsUrl + 'cars.json';
  private readonly travelsUrl = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient) {}

  public getCars$ = (): Observable<Car[]> => this.http.get<Car[]>(this.carsUrl);
  public getCarByLinkId$ = (carId: string): Observable<Car> => this.getCars$().pipe(map(cars => this.findCar(cars, carId)));

  private findCar = (cars: Car[], carId: string): Car => cars.find(car => car.link.routerLink === carId);

  public getTravel$ = (travel: Travel): Observable<Travel> =>
    this.http.get<Travel>(this.getUrlTravelId(travel)).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          return this.postTravel$(travel);
        }
        return throwError(err);
      })
    );
  public postTravel$ = (travel: Travel): Observable<Travel> => this.http.post<Travel>(this.travelsUrl, travel);
  public putTravel$ = (travel: Travel): Observable<Travel> => this.http.put<Travel>(this.getUrlTravelId(travel), travel);
  public deleteTravel$ = (travel: Travel): Observable<void> => this.http.delete<void>(this.getUrlTravelId(travel));

  private getUrlTravelId = (travel: Travel): string => `${this.travelsUrl}/${travel._id}`;
}
