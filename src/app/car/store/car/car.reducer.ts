import { CarActions, CarActionTypes } from './car.actions';
import { CarState, initialCarState } from './car.state';

export function carReducer(
  state = initialCarState,
  action: CarActions
): CarState {
  switch (action.type) {
    case CarActionTypes.LoadCars:
      return state;

    default:
      return state;
  }
}
