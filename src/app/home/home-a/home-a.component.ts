import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Car } from '../../core/store/models/car.model';
import { Link } from '../../core/store/models/link.model';
import { LoadCars } from '../../core/store/state/cars/cars.actions';
import { carsSelector } from '../../core/store/state/cars/cars.state';
import { RootState } from '../../core/store/state/root/root.state';

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
  <app-menu-list caption="async: Cars in your garage:"
    [links]="carLinks$ | async">
  </app-menu-list>
  <a routerLink="/"> Home-Resolve </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAComponent implements OnInit {
  public carLinks$: Observable<Link[]>;
  public title = environment.title;
  public subtitle = environment.version;
  constructor(private store: Store<RootState>) {}

  public ngOnInit() {
    this.store.dispatch(new LoadCars());
    this.carLinks$ = this.store.select(carsSelector).pipe(
      filter(cars => cars != null),
      map(cars => cars.map(this.getLinkFromCar))
    );
  }
  private getLinkFromCar(car: Car): Link {
    return {
      caption: car.link.caption,
      routerLink: '/car/' + car.link.routerLink,
      value: formatNumber(car.cost, 'en-US') + ' EUR'
    };
  }
}
