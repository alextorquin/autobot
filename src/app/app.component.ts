import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-root',
  template: `<app-navigator></app-navigator> `,
  styles: []
})
export class AppComponent {}
