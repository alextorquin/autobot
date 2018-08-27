import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cars } from '../../core/store/cars';
import { Car } from '../../core/store/models/car.model';

@Component({
  selector: 'app-car',
  template: `
  <br>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        {{ car.model }}
      </div>
      <a [routerLink]="['/']"  aria-label="home" class="button is-info is-outlined"> <-   </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div>
          Current speed : {{ car.currentSpeed }} km/h of {{ car.maxSpeed }} km/h maximum
        </div>
        <div>
          Traveled : {{ car.distanceTraveled }} km of {{ car.maxDistance }} km maximum
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <button class="button is-danger is-outlined">Brake</button>
      </div>
      <div class="card-footer-item">
        <button class="button is-primary is-outlined">Throttle</button>
      </div>
    </footer>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  public car: Car;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = Cars.find(c => c.link.url === carId);
  }
}
