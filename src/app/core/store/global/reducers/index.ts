import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import { GlobalState } from '../../models/global-state.model';

export interface State extends GlobalState {}

export const reducers: ActionReducerMap<State> = {
  token: string,
  userMessage: string,
  loginNeeded: boolean
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
