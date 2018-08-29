import { Car } from './models/car.model';

export const CARS: Car[] = [
  {
    model: 'Model S',
    cost: 96680,
    topSpeed: 225,
    currentSpeed: 0,
    totalBattery: 490,
    distanceTraveled: 0,
    remainingBattery: 490,
    link: {
      url: 'model-s',
      caption: 'Model S'
    }
  },
  {
    model: 'Model X',
    cost: 89530,
    topSpeed: 210,
    currentSpeed: 0,
    totalBattery: 417,
    distanceTraveled: 0,
    remainingBattery: 417,
    link: {
      url: 'model-x',
      caption: 'Model X'
    }
  },
  {
    model: 'Model 3',
    cost: 29868.13,
    topSpeed: 254,
    currentSpeed: 0,
    totalBattery: 400,
    distanceTraveled: 0,
    remainingBattery: 400,
    link: {
      url: 'model-3',
      caption: 'Model 3'
    }
  },
  {
    model: 'Roadster',
    cost: 172000,
    topSpeed: 400,
    currentSpeed: 0,
    totalBattery: 998,
    distanceTraveled: 0,
    remainingBattery: 998,
    link: {
      url: 'roadster',
      caption: 'Roadster'
    }
  }
];
