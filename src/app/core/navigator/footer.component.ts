import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer has-text-centered">
    <div>{{ message }}</div>
    <div>
      <a routerLink="about"><strong> Autobot.</strong> </a><i>-A simple Angular project for playing with cars... while learning Angular ;-)</i>.
    </div>
    <div>
      <a href="https://github.com/AcademiaBinaria/{{title}}/tree/{{version}}/"
        rel="noopener" target="_blank">
          v: {{ version }}
      </a>
      <small>By <a href="https://twitter.com/albertobasalo">Alberto Basalo</a></small>
    </div>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  public title = environment.title;
  public version = environment.version;
  @Input()
  public message: string;
  constructor() {}

  ngOnInit() {}
}
