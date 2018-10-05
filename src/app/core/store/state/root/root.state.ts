import { CarsState } from '../cars/cars.state';
import { GlobalState } from '../global/global.state';

export interface RootState {
  router: any;
  global: GlobalState;
  cars: CarsState;
}
