import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface GlobalState {
  token: string;
  userMessage: string;
  loginNeeded: boolean;
}

export const initialState: GlobalState = {
  token: sessionStorage['token'],
  userMessage: 'Init AutoBot',
  loginNeeded: false
};

export const globalFeatureSelector = createFeatureSelector('global');
export const userMessageSelector = createSelector(
  globalFeatureSelector,
  (state: GlobalState) => state.userMessage
);
export const loginNeededSelector = createSelector(
  globalFeatureSelector,
  (state: GlobalState) => state.loginNeeded
);
export const tokenSelector = createSelector(
  globalFeatureSelector,
  (state: GlobalState) => state.token
);
