import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from './store/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private readonly url = './assets/data/cars.json';

  constructor(private http: HttpClient) {}

  public getCars$ = (): Observable<Car[]> => this.http.get<Car[]>(this.url);

  public getCarByLinkId$(carId: string): Observable<Car> {
    return this.getCars$().pipe(map(cars => cars.find(car => this.findCar(car, carId))));
  }

  private findCar = (car, carId: string): boolean => car.link.routerLink === carId;
}
