import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" routerLink="/">
        <img src="./assets/logo.png" alt="Autobot: learn Angular playing with cars" height="28">
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start ">
        <a class="navbar-item" routerLink="about"> About</a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item"
          rel="noopener"
          href="https://github.com/AcademiaBinaria/{{title}}/releases/tag/v{{ tag }}/"
          target="_blank">v: {{ version }}</a>
      </div>
    </div>
  </nav>
  <br>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public title = environment.title;
  public version = environment.version;
  public tag = environment.tag;
  constructor() {}

  ngOnInit() {}
}
