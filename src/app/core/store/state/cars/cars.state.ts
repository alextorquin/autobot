import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Car } from '../../models/car.model';

export interface CarsState {
  cars: Car[];
  working: boolean;
  completed: boolean;
  message: string;
}

export const initialCarsState: CarsState = {
  cars: [],
  working: false,
  completed: false,
  message: ''
};

export const carsFeatureSelector = createFeatureSelector('cars');
export const carsSelector = createSelector(
  carsFeatureSelector,
  (state: CarsState) => state.cars
);
