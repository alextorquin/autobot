import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CarsService } from '../../../cars.service';
import { Car } from '../../models/car.model';
import {
  CarsActions,
  CarsActionTypes,
  LoadCars,
  LoadCarsError,
  LoadCarsOK
} from './cars.actions';

@Injectable()
export class CarsEffects {
  constructor(private actions$: Actions, private cars: CarsService) {}

  @Effect()
  public loadCarsEffect$: Observable<CarsActions> = this.actions$.pipe(
    ofType<LoadCars>(CarsActionTypes.LoadCars),
    mergeMap(() =>
      this.cars.getCars$().pipe(
        map((cars: Car[]) => new LoadCarsOK(cars)),
        catchError(err => of(new LoadCarsError('Error loading cars')))
      )
    )
  );

  private loadCars$(): Observable<CarsActions> {
    return this.cars.getCars$().pipe(
      map((cars: Car[]) => new LoadCarsOK(cars)),
      catchError(err => of(new LoadCarsError('Error loading cars')))
    );
  }
}
