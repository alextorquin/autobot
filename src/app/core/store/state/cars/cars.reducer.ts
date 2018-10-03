import { CarsActions, CarsActionTypes } from './cars.actions';
import { CarsState, initialCarsState } from './cars.state';

export function carsReducer(
  state = initialCarsState,
  action: CarsActions
): CarsState {
  switch (action.type) {
    case CarsActionTypes.LoadCars:
      return {
        cars: null,
        loading: true,
        loaded: false,
        message: 'Loading...'
      };
    case CarsActionTypes.LoadCarsOK:
      return {
        cars: action.payload,
        loading: false,
        loaded: true,
        message: `${action.payload.length} cars loaded.`
      };
    case CarsActionTypes.LoadCarsError:
      return {
        cars: [],
        loading: false,
        loaded: false,
        message: action.payload
      };
    default:
      return state;
  }
}
