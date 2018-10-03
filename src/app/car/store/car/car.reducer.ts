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
        canDeactivate: true
      };
    case CarActionTypes.LoadCarOK:
      return {
        car: action.payload,
        travel: null,
        working: false,
        completed: true,
        message: 'Car Loaded',
        canDeactivate: true
      };
    case CarActionTypes.LoadCarError:
      return {
        car: null,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.LoadTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Loading Travel...',
        canDeactivate: true
      };
    case CarActionTypes.LoadTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Loaded',
        canDeactivate: false
      };
    case CarActionTypes.LoadTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.InsertTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Inserting Travel...',
        canDeactivate: true
      };
    case CarActionTypes.InsertTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Inserted',
        canDeactivate: true
      };
    case CarActionTypes.InsertTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.UpdateTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Updating Travel...',
        canDeactivate: false
      };
    case CarActionTypes.UpdateTravelOK:
      return {
        ...state,
        travel: action.payload,
        working: false,
        completed: true,
        message: 'Travel Updated',
        canDeactivate: true
      };
    case CarActionTypes.UpdateTravelError:
      return {
        ...state,
        travel: null,
        working: false,
        completed: false,
        message: action.payload,
        canDeactivate: true
      };
    case CarActionTypes.DeleteTravel:
      return {
        ...state,
        travel: null,
        working: true,
        completed: false,
        message: 'Deleting Travel...',
        canDeactivate: false
      };
    case CarActionTypes.DeleteTravelOK:
      return {
        ...state,
        travel: null,
        working: false,
        completed: true,
        message: 'Travel Deleted',
        canDeactivate: true
      };
    case CarActionTypes.DeleteTravelError:
      return {
        ...state,
        working: false,
        completed: false,
        message: action.payload,
        canDeactivate: true
      };
    default:
      return state;
  }
}
