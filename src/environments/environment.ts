// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'autobot',
  version: 'a-redux',
  tag: '10.0.0',
  clearMessageDelayMs: 5000,
  refreshInterval: 1000,
  factorSpeed: 10,
  timeTravel: 300,
  dangerSpeedRate: 0.9,
  warningSpeedRate: 0.7,
  dangerKmsBattery: 100,
  warningKmsBattery: 150,
  assetsUrl: './assets/data/',
  apiUrl: 'http://api-base.escuelabinaria.com/api/'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
