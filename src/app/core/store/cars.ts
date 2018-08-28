import { Car } from './models/car.model';

export const Cars: Car[] = [
  {
    model: 'Model S',
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
    topSpeed: 354,
    currentSpeed: 0,
    totalBattery: 354,
    distanceTraveled: 0,
    remainingBattery: 354,
    link: {
      url: 'model-3',
      caption: 'Model 3'
    }
  },
  {
    model: 'Roadster',
    topSpeed: 228,
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
