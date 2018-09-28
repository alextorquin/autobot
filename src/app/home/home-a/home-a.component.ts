import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { Car } from '../../core/store/models/car.model';
import { Link } from '../../core/store/models/link.model';

@Component({
  selector: 'app-home-a',
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
  <app-menu-list caption="subscribe: Cars in your garage:"
    [links]="carLinks">
  </app-menu-list>
  <app-menu-list caption="async: Cars in your garage:"
    [links]="carLinks$ | async">
  </app-menu-list>
  <a routerLink="/"> Home-Resolve </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAComponent implements OnInit {
  public carLinks: Link[] = [];
  public carLinks$: Observable<Link[]>;
  public title = environment.title;
  public subtitle = environment.version;
  constructor(private cars: CarsService) {}

  public ngOnInit() {
    this.carLinks$ = this.cars.getCars$().pipe(map(cars => cars.map(this.getLinkFromCar)));
    this.carLinks$.subscribe(carLinks => (this.carLinks = carLinks));
  }
  private getLinkFromCar(car: Car): Link {
    return {
      caption: car.link.caption,
      routerLink: '/car/' + car.link.routerLink,
      value: formatNumber(car.cost, 'en-US') + ' EUR'
    };
  }
}
