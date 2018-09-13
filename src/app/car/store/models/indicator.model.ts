import { statusClass } from '../../../core/store/models/status-class.type';
import { Tag } from '../../../core/store/models/tag.model';

export interface Indicator {
  value: number;
  max: number;
  class: statusClass;
  tags: Tag[];
}
