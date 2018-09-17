import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarsService } from '../core/cars.service';
import { Car } from '../core/store/models/car.model';

@Injectable()
export class CarsResolverService implements Resolve<Car[]> {
  private carsCache: Car[];
  constructor(private cars: CarsService) {}
  public resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car[]> => {
    if (this.carsCache) {
      return of(this.carsCache);
    } else {
      return this.cars.getCars$().pipe(tap(cars => (this.carsCache = cars)));
    }
  };
}
