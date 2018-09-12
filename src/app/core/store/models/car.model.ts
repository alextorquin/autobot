import { Link } from './link.model';

export interface Car {
  name: string;
  cost: number;
  topSpeed: number;
  currentSpeed: number;
  totalBattery: number;
  remainingBattery: number;
  distanceTraveled: number;
  link: Link;
}
