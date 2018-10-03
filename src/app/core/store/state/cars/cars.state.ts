import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Car } from '../../models/car.model';

export interface CarsState {
  cars: Car[];
  loading: boolean;
  loaded: boolean;
  message: string;
}

export const initialCarsState: CarsState = {
  cars: [],
  loading: false,
  loaded: false,
  message: ''
};

export const carsFeatureSelector = createFeatureSelector('cars');
export const carsSelector = createSelector(
  carsFeatureSelector,
  (state: CarsState) => state.cars
);
