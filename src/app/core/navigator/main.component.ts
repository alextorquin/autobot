import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <main class="section">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </main>
  `,
  styles: []
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
