import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Global } from '../global/global-state.model';
import * as fromGlobal from './../global/global.reducer';
export interface State {
  router: any;
  global: Global;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  global: fromGlobal.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectGlobalFeature = createFeatureSelector('global');
export const selectUserMessage = createSelector(selectGlobalFeature, (state: Global) => state.userMessage);
