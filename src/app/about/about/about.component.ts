import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>
      about works!
    </h1>
    <h2 class="title">Links to learn Angular: </h2>
      <ul>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://academia-binaria.com/hola-angular-cli/">Tutorial en español</a></h2>
        </li>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://github.com/AcademiaBinaria/autobot/tree/0-hello">GitHub Repository</a></h2>
        </li>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
        </li>
      </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
