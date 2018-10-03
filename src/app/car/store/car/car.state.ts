import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CarState {
  car: any;
  travel: any;
  loading: boolean;
  loaded: boolean;
  message: string;
  canDeactivate: boolean;
}

export const initialCarState: CarState = {
  car: null,
  travel: null,
  loading: false,
  loaded: false,
  message: '',
  canDeactivate: true
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
