import { Link } from './link.model';

export interface Car {
  model: string;
  maxSpeed: number;
  distance: number;
  link: Link;
}
