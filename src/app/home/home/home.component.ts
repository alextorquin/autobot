import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CARS } from '../../core/store/cars';
import { Car } from '../../core/store/models/car.model';
import { Link } from '../../core/store/models/link.model';

@Component({
  selector: 'app-home',
  template: `
  <header class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title"> Welcome to {{title}} </h1>
      <h2 class="subtitle"> Version: {{subtitle}} </h2>
      <a target="_blank" rel="noopener" href="https://academia-binaria.com/">
        <img width="100" src="./assets/logo.png">
      </a>
    </div>
  </header>
  <app-menu-list caption="Cars in your garage:"
    [links]="links">
  </app-menu-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public cars: Car[] = CARS;
  public links: Link[];
  public title = 'autobot';
  public subtitle = '4-flow';
  constructor() {}

  public ngOnInit() {
    this.links = this.cars.map(c => {
      return {
        caption: c.link.caption,
        routerLink: '/car/' + c.link.routerLink,
        value: formatNumber(c.cost, 'en-US') + ' EUR'
      };
    });
  }
}
