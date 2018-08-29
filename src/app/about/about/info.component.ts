import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <h2 class="subtitle">
      Play with cars...
    </h2>
    <h2 class="subtitle">
      ...while learning Angular.
    </h2>
  `,
  styles: []
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
