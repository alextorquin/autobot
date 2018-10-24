import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Car } from '../../core/store/models/car.model';
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
  <button (click)="onClick()" >Load</button>
  <app-menu-list caption="Cars in your garage:"
    [links]="carLinks">
  </app-menu-list>
  <a routerLink="/a"> Home-Async </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  public carLinks: Link[] = [];
  public title = environment.title;
  public subtitle = environment.version;
  private temp;
  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    // to push or not to push
    this.temp = this.route.snapshot.data.cars.map(this.getLinkFromCar);
    setTimeout(() => {
      this.temp.forEach(link => this.carLinks.push(link));
      // this.carLinks = [...this.temp];
    }, 2000);
  }
  public onClick() {
    this.temp.forEach(link => this.carLinks.push(link));
  }
  private getLinkFromCar(car: Car): Link {
    return {
      caption: car.link.caption,
      routerLink: '/car/' + car.link.routerLink,
      value: formatNumber(car.cost, 'en-US') + ' EUR'
    };
  }
}
