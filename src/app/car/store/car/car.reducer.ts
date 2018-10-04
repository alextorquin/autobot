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
        working: true,
        completed: false,
        message: 'Loading car...',
        canBeDeactivated: true
      };
    case CarActionTypes.LoadCarOK:
      return {
        car: action.payload,
        travel: null,
        working: false,
        completed: true,
        message: 'Car Loaded',
        canBeDeactivated: true
      };
    case CarActionTypes.LoadCarError:
      return {
        car: null,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canBeDeactivated: true
      };
    case CarActionTypes.LoadTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Loading Travel...',
        canBeDeactivated: true
      };
    case CarActionTypes.LoadTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Loaded',
        canBeDeactivated: true
      };
    case CarActionTypes.LoadTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canBeDeactivated: true
      };
    case CarActionTypes.InsertTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Inserting Travel...',
        canBeDeactivated: true
      };
    case CarActionTypes.InsertTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Inserted',
        canBeDeactivated: true
      };
    case CarActionTypes.InsertTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canBeDeactivated: true
      };
    case CarActionTypes.UpdateTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Updating Travel...',
        canBeDeactivated: false
      };
    case CarActionTypes.UpdateTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Updated',
        canBeDeactivated: true
      };
    case CarActionTypes.UpdateTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canBeDeactivated: true
      };
    case CarActionTypes.DeleteTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Deleting Travel...',
        canBeDeactivated: false
      };
    case CarActionTypes.DeleteTravelOK:
      return {
        ...state,
        travel: null,
        working: false,
        completed: true,
        message: 'Travel Deleted',
        canBeDeactivated: true
      };
    case CarActionTypes.DeleteTravelError:
      return {
        ...state,
        working: false,
        completed: false,
        message: action.payload,
        canBeDeactivated: true
      };
    case CarActionTypes.Brake:
      return {
        ...state,
        car: action.payload,
        message: 'Brake',
        canBeDeactivated: false
      };
    case CarActionTypes.Throttle:
      return {
        ...state,
        car: action.payload,
        message: 'Throttle',
        canBeDeactivated: false
      };
    default:
      return state;
  }
}
