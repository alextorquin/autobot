import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <p>
      car works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
