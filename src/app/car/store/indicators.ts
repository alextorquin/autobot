import { Indicator } from './models/indicator.model';

export const INDICATORS: Indicator[] = [
  {
    value: 0,
    max: 0,
    class: 'is-info',
    tags: [
      {
        caption: 'Speed',
        value: 0,
        class: 'is-info'
      },
      {
        caption: 'Top',
        value: 0,
        class: 'is-danger'
      }
    ]
  },
  {
    value: 0,
    max: 0,
    class: 'is-success',
    tags: [
      {
        caption: 'Traveled',
        value: 0,
        class: 'is-success'
      },
      {
        caption: 'Remaining',
        value: 0,
        class: 'is-danger'
      }
    ]
  }
];
