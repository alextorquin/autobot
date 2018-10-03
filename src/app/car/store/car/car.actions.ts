import { Action } from '@ngrx/store';
import { Car } from '../../../core/store/models/car.model';
import { Travel } from '../../../core/store/models/travel.model';

export enum CarActionTypes {
  LoadCar = '[Car] Load Car',
  LoadCarOK = '[Car] Load Car OK',
  LoadCarError = '[Car] Load Car Error',
  LoadTravel = '[Car] Load Travel',
  LoadTravelOK = '[Car] Load Travel OK',
  LoadTravelError = '[Car] Load Travel Error',
  PostTravel = '[Car] Post Travel',
  PostTravelOK = '[Car] Post Travel OK',
  PostTravelError = '[Car] Post Travel Error'
}

export class LoadCar implements Action {
  readonly type = CarActionTypes.LoadCar;
  constructor(public payload: string) {}
}

export class LoadCarOK implements Action {
  readonly type = CarActionTypes.LoadCarOK;
  constructor(public payload: Car) {}
}

export class LoadCarError implements Action {
  readonly type = CarActionTypes.LoadCarError;
  constructor(public payload: string) {}
}

export class LoadTravel implements Action {
  readonly type = CarActionTypes.LoadTravel;
  constructor(public payload: Car) {}
}

export class LoadTravelOK implements Action {
  readonly type = CarActionTypes.LoadTravelOK;
  constructor(public payload: Travel) {}
}

export class LoadTravelError implements Action {
  readonly type = CarActionTypes.LoadTravelError;
  constructor(public payload: string) {}
}

export class PostTravel implements Action {
  readonly type = CarActionTypes.PostTravel;
  constructor(public payload: Car) {}
}

export class PostTravelOK implements Action {
  readonly type = CarActionTypes.PostTravelOK;
  constructor(public payload: Travel) {}
}

export class PostTravelError implements Action {
  readonly type = CarActionTypes.PostTravelError;
  constructor(public payload: string) {}
}

export type CarActions =
  | LoadCar
  | LoadCarOK
  | LoadCarError
  | LoadTravel
  | LoadTravelOK
  | LoadTravelError
  | PostTravel
  | PostTravelOK
  | PostTravelError;
