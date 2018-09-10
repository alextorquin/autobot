import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { Link } from '../../core/store/models/link.model';

@Component({
  selector: 'app-home',
  template: `
  <header class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title"> Welcome to {{title}} </h1>
      <h2 class="subtitle"> Version: {{subtitle}} </h2>
      <a target="_blank" rel="noopener" href="https://academiabinaria.github.io/autobot/">
        <img width="80" src="./assets/logo.png">
      </a>
    </div>
  </header>
  <app-menu-list caption="Cars in your garage:"
    [links]="carLinks">
  </app-menu-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public carLinks: Link[];
  public title = environment.title;
  public subtitle = environment.version;
  constructor(private carsService: CarsService) {}

  public ngOnInit() {
    this.carLinks = this.carsService.getCars().map(c => {
      return {
        caption: c.link.caption,
        routerLink: '/car/' + c.link.routerLink,
        value: formatNumber(c.cost, 'en-US') + ' EUR'
      };
    });
  }
}
