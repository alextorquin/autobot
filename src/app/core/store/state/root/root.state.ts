import { Cars } from '../cars/cars.state';
import { Global } from '../global/global.state';

export interface RootState {
  router: any;
  global: Global;
  cars: Cars;
}
