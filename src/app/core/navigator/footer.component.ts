import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer has-text-centered">
    <div>
      <a routerLink="about"><strong> Autobot.</strong> </a><i>-A simple Angular project for playing with cars... while learning Angular ;-)</i>.
    </div>
    <div>
      <a href="https://github.com/AcademiaBinaria/astrobot/releases/tag/v{{ tag }}/"
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
  public title = 'autobot';
  public version = '3-data';
  public tag = '3.0.0';
  constructor() {}

  ngOnInit() {}
}
