import { Injectable } from '@angular/core';
import { CARS } from './store/cars';
import { Car } from './store/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars: Car[] = CARS;
  constructor() {}

  public getCars = () => this.cars;

  public getCarByLinkId = carId => this.cars.find(c => c.link.routerLink === carId);
}
