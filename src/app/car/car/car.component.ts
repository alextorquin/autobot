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
          <progress class="progress is-info" [value]="car.currentSpeed" [max]="car.maxSpeed"></progress>
        </div>
        <div>
          Traveled : {{ car.distanceTraveled }} km of {{ car.maxDistance }} km maximum
          <progress class="progress is-info" [value]="car.maxDistance - car.distanceTraveled" [max]="car.maxDistance"></progress>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <button class="button is-danger is-outlined" (click)="onBrake()">Brake</button>
      </div>
      <div class="card-footer-item">
        <button class="button is-primary is-outlined" (click)="onThrottle()">Throttle</button>
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

  public onBrake() {
    if (this.checkDistance()) {
      if (this.car.currentSpeed > 0) {
        this.car.currentSpeed--;
      } else {
        this.car.currentSpeed = 0;
      }
      this.updateDistance();
    } else {
      this.stopCar();
    }
  }

  public onThrottle() {
    if (this.checkDistance()) {
      if (this.car.currentSpeed < this.car.maxSpeed) {
        this.car.currentSpeed++;
      } else {
        this.car.currentSpeed = this.car.maxSpeed;
      }
      this.updateDistance();
    } else {
      this.stopCar();
    }
  }

  private stopCar = () => (this.car.currentSpeed = 0);

  private checkDistance = () => this.car.distanceTraveled < this.car.maxDistance;

  private updateDistance = () => (this.car.distanceTraveled += this.car.currentSpeed);
}
