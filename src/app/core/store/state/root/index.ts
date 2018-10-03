import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import * as fromGlobal from '../global/global.reducer';
import { RootState } from './root.state';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  global: fromGlobal.reducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];

// cars : fromCars.reducer

// loadCars (Sucess , Error)

// car: fromCar.reducer

// LoadCarById  (Sucess , Error)
// LoadTravelByCarLink  (Sucess , Error)
// SaveTravel  (Sucess , Error)
// DeleteTravel  (Sucess , Error)
