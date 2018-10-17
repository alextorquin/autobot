import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CARS } from '../../core/store/cars';
import { Car } from '../../core/store/models/car.model';

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
  <aside class="menu">
    <p class="menu-label">
      Cars in your garage:
    </p>
    <ul class="menu-list">
      <li *ngFor="let car of cars">
        <a [routerLink]="['/car', car.link.url]">
          <strong>
            {{ car.link.caption | lowercase }}
          </strong>
          <span class="is-pulled-right">
            {{ car.cost | currency:'EUR' }}
          </span>
        </a>
      </li>
    </ul>
  </aside>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public cars: Car[] = CARS;
  public title = 'autobot';
  public subtitle = '3-data';
  constructor() {}

  ngOnInit() {}
}
