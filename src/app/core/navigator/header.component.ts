import { Component, OnInit } from '@angular/core';

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
          href="https://github.com/AcademiaBinaria/astrobot/releases/tag/v{{ tag }}/"
          target="_blank">v: {{ version }}</a>
      </div>
    </div>
  </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public title = 'autobot';
  public version = '2-spa';
  public tag = '2.0.0';
  constructor() {}

  ngOnInit() {}
}
