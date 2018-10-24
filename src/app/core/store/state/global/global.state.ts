import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Global {
  token: string;
  userMessage: string;
  loginNeeded: boolean;
}

export const initialState: Global = { token: '', userMessage: 'Init AutoBot', loginNeeded: false };

export const globalFeatureSelector = createFeatureSelector('global');
export const userMessageSelector = createSelector(globalFeatureSelector, (state: Global) => state.userMessage);
export const loginNeededSelector = createSelector(globalFeatureSelector, (state: Global) => state.loginNeeded);
export const tokenSelector = createSelector(globalFeatureSelector, (state: Global) => state.token);
