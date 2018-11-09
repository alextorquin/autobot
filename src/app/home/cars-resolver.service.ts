import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { Car } from '../core/store/models/car.model';
import { LoadCars } from '../core/store/state/cars/cars.actions';
import { carsSelector } from '../core/store/state/cars/cars.state';
import { RootState } from '../core/store/state/root/root.state';

@Injectable()
export class CarsResolverService implements Resolve<Car[]> {
  private carsCache: Car[];
  private cars$ = this.store.select(carsSelector).pipe(
    filter(cars => cars != null),
    tap(cars => (this.carsCache = cars)),
    take(1)
  );
  constructor(private store: Store<RootState>) {}
  public resolve = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Car[]> => {
    if (this.carsCache) {
      return of(this.carsCache);
    } else {
      this.store.dispatch(new LoadCars());
      return this.cars$;
    }
  };
}
