import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Car } from '../../../core/store/models/car.model';
import { Travel } from '../../../core/store/models/travel.model';

export interface CarState {
  car: Car;
  travel: Travel;
  working: boolean;
  completed: boolean;
  message: string;
  canBeDeactivated: boolean;
}

export const initialCarState: CarState = {
  car: null,
  travel: null,
  working: false,
  completed: false,
  message: '',
  canBeDeactivated: true
};

export const carFeatureSelector = createFeatureSelector('car');
export const carStateSelector = createSelector(
  carFeatureSelector,
  (state: CarState) => state
);
export const carSelector = createSelector(
  carFeatureSelector,
  (state: CarState) => state.car
);
export const travelSelector = createSelector(
  carFeatureSelector,
  (state: CarState) => state.travel
);
export const canDeactivateSelector = createSelector(
  carFeatureSelector,
  (state: CarState) => state.canBeDeactivated
);
