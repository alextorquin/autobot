import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Car } from './store/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private readonly carsUrl = environment.assetsUrl + 'cars.json';

  constructor(private http: HttpClient) {}

  public getCars$ = (): Observable<Car[]> => this.http.get<Car[]>(this.carsUrl);
  public getCarByLinkId$ = (carId: string): Observable<Car> => this.filterCars$(this.getCars$(), carId);

  private filterCars$ = (cars$: Observable<Car[]>, carId: string) => cars$.pipe(map(cars => this.filterCars(cars, carId)));
  private filterCars = (cars: Car[], carId: string): Car => cars.find(car => car.link.routerLink === carId);
}
