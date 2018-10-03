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
        working: true,
        completed: false,
        message: 'Loading...'
      };
    case CarsActionTypes.LoadCarsOK:
      return {
        cars: action.payload,
        working: false,
        completed: true,
        message: `${action.payload.length} cars loaded.`
      };
    case CarsActionTypes.LoadCarsError:
      return {
        cars: [],
        working: false,
        completed: false,
        message: action.payload
      };
    default:
      return state;
  }
}
