import { Link } from './link.model';

export interface Car {
  model: string;
  topSpeed: number;
  currentSpeed: number;
  totalBattery: number;
  remainingBattery: number;
  distanceTraveled: number;
  link: Link;
}
