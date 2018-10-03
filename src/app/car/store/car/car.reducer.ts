import { Action } from '@ngrx/store';
import { CarActions, CarActionTypes } from './car.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: CarActions): State {
  switch (action.type) {

    case CarActionTypes.LoadCars:
      return state;


    default:
      return state;
  }
}
