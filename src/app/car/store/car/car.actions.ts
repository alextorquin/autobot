import { Action } from '@ngrx/store';

export enum CarActionTypes {
  LoadCars = '[Car] Load Cars'
}

export class LoadCars implements Action {
  readonly type = CarActionTypes.LoadCars;
}

export type CarActions = LoadCars;
