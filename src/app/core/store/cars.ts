import { Car } from './models/car.model';

export const Cars: Car[] = [
  {
    model: 'Model S',
    maxSpeed: 225,
    currentSpeed: 0,
    maxDistance: 490,
    distanceTraveled: 0,
    distanceRemaining: 490,
    link: {
      url: 'model-s',
      caption: 'Model S'
    }
  },
  {
    model: 'Model X',
    maxSpeed: 210,
    currentSpeed: 0,
    maxDistance: 417,
    distanceTraveled: 0,
    distanceRemaining: 417,
    link: {
      url: 'model-x',
      caption: 'Model X'
    }
  },
  {
    model: 'Model 3',
    maxSpeed: 354,
    currentSpeed: 0,
    maxDistance: 354,
    distanceTraveled: 0,
    distanceRemaining: 354,
    link: {
      url: 'model-3',
      caption: 'Model 3'
    }
  },
  {
    model: 'Roadster',
    maxSpeed: 228,
    currentSpeed: 0,
    maxDistance: 998,
    distanceTraveled: 0,
    distanceRemaining: 998,
    link: {
      url: 'roadster',
      caption: 'Roadster'
    }
  }
];
