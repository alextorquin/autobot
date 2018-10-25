import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../../../environments/environment.prod';

export interface Global {
  token: string;
  userMessage: string;
  loginNeeded: boolean;
  title: string;
}

export const initialState: Global = { token: '', userMessage: 'Init AutoBot', loginNeeded: false, title: environment.title };

export const globalFeatureSelector = createFeatureSelector('global');
export const userMessageSelector = createSelector(globalFeatureSelector, (state: Global) => state.userMessage);
export const loginNeededSelector = createSelector(globalFeatureSelector, (state: Global) => state.loginNeeded);
export const tokenSelector = createSelector(globalFeatureSelector, (state: Global) => state.token);
export const titleSelector = createSelector(globalFeatureSelector, (state: Global) => state.title);
