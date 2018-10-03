import { Action } from '@ngrx/store';
import { Car } from '../../models/car.model';

export enum CarsActionTypes {
  LoadCars = '[Cars] Load Cars',
  LoadCarsOK = '[Cars] Load Cars OK',
  LoadCarsError = '[Cars] Load Cars Error'
}

export class LoadCars implements Action {
  readonly type = CarsActionTypes.LoadCars;
  constructor() {}
}

export class LoadCarsOK implements Action {
  readonly type = CarsActionTypes.LoadCarsOK;
  constructor(public payload: Car[]) {}
}

export class LoadCarsError implements Action {
  readonly type = CarsActionTypes.LoadCarsError;
  constructor(public payload: string) {}
}

export type CarsActions = LoadCars | LoadCarsOK | LoadCarsError;
