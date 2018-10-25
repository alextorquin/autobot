import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import * as fromCars from '../cars/cars.reducer';
import * as fromGlobal from '../global/global.reducer';
import { RootState } from './root.state';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  global: fromGlobal.reducer,
  cars: fromCars.carsReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? []
  : [];
