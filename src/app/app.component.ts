import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `<app-navigator></app-navigator> `,
  styles: []
})
export class AppComponent {}
