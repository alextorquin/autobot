import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarActionTypes } from './car.actions';

@Injectable()
export class CarEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(CarActionTypes.LoadCars));

  constructor(private actions$: Actions) {}
}
