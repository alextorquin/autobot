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
          <progress class="progress is-success" [value]="car.currentSpeed" [max]="car.maxSpeed"></progress>
        </div>
        <div>
          Traveled : {{ car.distanceTraveled }} km of {{ car.maxDistance }} km maximum
          <progress [ngClass]="['progress', distanceClass]" [value]="car.maxDistance - car.distanceTraveled" [max]="car.maxDistance"></progress>
        </div>
        <form *ngIf="isOutOfFuel" #rechargingForm="ngForm" (ngSubmit)="onRecharge()">
          <div class="field">
            <label class="label">Kilometers to recharge</label>
            <div class="control">
              <input [(ngModel)]="rechargedDistance" name="rechargedDistance" type="number" required>
            </div>
          </div>
          <button type="submit" class="button is-primary" [disabled]="rechargingForm.form.invalid">Recharge</button>
        </form>
      </div>
    </div>
    <footer class="card-footer" >
      <div class="card-footer-item">
        <button class="button is-danger is-outlined" [disabled]="isOutOfFuel" (click)="onBrake()">Brake</button>
      </div>
      <div class="card-footer-item">
        <button class="button is-primary is-outlined" [disabled]="isOutOfFuel" (click)="onThrottle()">Throttle</button>
      </div>
    </footer>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  public car: Car;
  public isOutOfFuel = false;
  public distanceClass = 'is-info';
  public rechargedDistance = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = Cars.find(c => c.link.url === carId);
  }

  public onBrake() {
    if (this.car.currentSpeed > 0) {
      this.car.currentSpeed--;
    } else {
      this.car.currentSpeed = 0;
    }
    this.updateDistance();
  }

  public onThrottle() {
    if (this.car.currentSpeed < this.car.maxSpeed) {
      this.car.currentSpeed++;
    } else {
      this.car.currentSpeed = this.car.maxSpeed;
    }
    this.updateDistance();
  }

  public onRecharge() {
    if (this.rechargedDistance > 0) {
      this.car.maxDistance = this.rechargedDistance;
      this.car.distanceTraveled = 0;
      this.isOutOfFuel = false;
    }
  }

  private updateDistance() {
    this.car.distanceTraveled += this.car.currentSpeed;
    this.checkFuel();
  }
  private checkFuel() {
    const remainingDistance = this.car.maxDistance - this.car.distanceTraveled;
    switch (true) {
      case remainingDistance <= 0:
        this.stopCar();
        break;
      case remainingDistance <= 100:
        this.distanceClass = 'is-danger';
        break;
      case remainingDistance <= 150:
        this.distanceClass = 'is-warning';
        break;
      default:
        this.distanceClass = 'is-info';
        break;
    }
  }
  private stopCar() {
    this.car.currentSpeed = 0;
    this.car.distanceTraveled = this.car.maxDistance;
    this.isOutOfFuel = true;
  }
}
