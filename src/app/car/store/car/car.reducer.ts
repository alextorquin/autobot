import { CarActions, CarActionTypes } from './car.actions';
import { CarState, initialCarState } from './car.state';

export function carReducer(
  state = initialCarState,
  action: CarActions
): CarState {
  switch (action.type) {
    case CarActionTypes.LoadCar:
      return {
        car: null,
        travel: null,
        loading: true,
        loaded: false,
        message: 'Loading car...',
        canDeactivate: true
      };
    case CarActionTypes.LoadCarOK:
      return {
        car: action.payload,
        travel: null,
        loading: false,
        loaded: true,
        message: 'Car Loaded',
        canDeactivate: true
      };
    case CarActionTypes.LoadCarError:
      return {
        car: null,
        travel: null,
        loading: false,
        loaded: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.LoadTravel:
      return {
        ...state,
        travel: null,
        loading: true,
        loaded: false,
        message: 'Loading Travel...',
        canDeactivate: true
      };
    case CarActionTypes.LoadTravelOK:
      return {
        ...state,
        travel: action.payload,
        loading: false,
        loaded: true,
        message: 'Travel Loaded',
        canDeactivate: true
      };
    case CarActionTypes.LoadTravelError:
      return {
        ...state,
        travel: null,
        loading: false,
        loaded: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.PostTravel:
      return {
        ...state,
        travel: null,
        loading: true,
        loaded: false,
        message: 'Posting Travel...',
        canDeactivate: true
      };
    case CarActionTypes.PostTravelOK:
      return {
        ...state,
        travel: action.payload,
        loading: false,
        loaded: true,
        message: 'Travel Posted',
        canDeactivate: true
      };
    case CarActionTypes.PostTravelError:
      return {
        ...state,
        travel: null,
        loading: false,
        loaded: false,
        message: action.payload,
        canDeactivate: true
      };
    default:
      return state;
  }
}
