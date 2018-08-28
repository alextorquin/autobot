import { Link } from './link.model';

export interface Car {
  model: string;
  maxSpeed: number;
  currentSpeed: number;
  maxDistance: number;
  distanceTraveled: number;
  distanceRemaining?: number;
  link: Link;
}
