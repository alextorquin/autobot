import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <h2 class="subtitle" i18n="@@play">Play with cars...</h2>
    <h2 class="subtitle" i18n="@@learn">...while learning Angular.</h2>
  `,
  styles: []
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
