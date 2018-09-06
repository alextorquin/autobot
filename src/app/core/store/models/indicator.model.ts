import { statusClass } from './status-class';
import { Tag } from './tag.model';

export interface Indicator {
  value: number;
  max: number;
  class: statusClass;
  tags: Tag[];
}
