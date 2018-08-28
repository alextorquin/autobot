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
          Battery
          <progress [ngClass]="['progress', distanceClass]" [value]="car.distanceRemaining" [max]="car.maxDistance"></progress>
        </div>
        <div>
          Total Traveled : {{ car.distanceTraveled }} km
        </div>
        <form *ngIf="!hasBattery()" #rechargingForm="ngForm" (ngSubmit)="onRecharge()">
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
    <footer class="card-footer" *ngIf="hasBattery()" >
      <div class="card-footer-item">
        <button class="button is-danger is-outlined" [disabled]="this.car.currentSpeed <= 0" (click)="onBrake()">Brake</button>
      </div>
      <div class="card-footer-item">
        <button class="button is-primary is-outlined" [disabled]="this.car.currentSpeed >= this.car.maxSpeed" (click)="onThrottle()">Throttle</button>
      </div>
    </footer>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  public car: Car;
  public distanceClass = 'is-success';
  public rechargedDistance = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = Cars.find(c => c.link.url === carId);
  }

  public onBrake() {
    this.car.currentSpeed--;
    this.checkBattery();
  }

  public onThrottle() {
    this.car.currentSpeed++;
    this.checkBattery();
  }

  public onRecharge() {
    if (this.rechargedDistance > this.car.maxDistance) {
      this.rechargedDistance = this.car.maxDistance;
    }
    this.car.distanceRemaining = this.rechargedDistance;
    this.checkBattery();
  }

  public hasBattery = () => this.car.distanceRemaining > 0;

  private checkBattery() {
    switch (true) {
      case this.car.distanceRemaining <= this.car.currentSpeed:
        this.stopCar();
        break;
      case this.car.distanceRemaining <= 100:
        this.distanceClass = 'is-danger';
        this.travelDistance();
        break;
      case this.car.distanceRemaining <= 150:
        this.distanceClass = 'is-warning';
        this.travelDistance();
        break;
      default:
        this.distanceClass = 'is-success';
        this.travelDistance();
        break;
    }
  }
  private stopCar() {
    this.car.currentSpeed = 0;
    this.car.distanceTraveled += this.car.distanceRemaining;
    this.car.distanceRemaining = 0;
  }
  private travelDistance() {
    this.car.distanceTraveled += this.car.currentSpeed;
    this.car.distanceRemaining -= this.car.currentSpeed;
  }
}
