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
        {{ car.model | uppercase }}
      </div>
      <a [routerLink]="['/']"  aria-label="home" class="button is-info is-outlined"> <-   </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div>
          Current speed : {{ car.currentSpeed | number:'1.0-0' }} km/h of {{ car.topSpeed }} km/h top speed
          <progress [ngClass]="['progress', speedClass]" [value]="car.currentSpeed" [max]="car.topSpeed"></progress>
        </div>
        <br>
        <div>
          Total traveled : {{ car.distanceTraveled | number:'1.2-2' }} km. You can travel {{ car.remainingBattery | number:'1.2-2' }} km.
          <progress [ngClass]="['progress', batteryClass]" [value]="car.remainingBattery" [max]="car.totalBattery"></progress>
        </div>
      </div>
    </div>
    <footer >
      <section *ngIf="hasBattery(); else rechargingSection"  class="card-footer">
        <div class="card-footer-item">
          <button class="button is-danger is-outlined" [disabled]="this.car.currentSpeed <= 0" (click)="onBrake()">Brake</button>
        </div>
        <div class="card-footer-item">
          <button class="button is-primary is-outlined" [disabled]="this.car.currentSpeed >= this.car.topSpeed" (click)="onThrottle()">Throttle</button>
        </div>
      </section>
      <ng-template #rechargingSection>
        <form #rechargingForm="ngForm" (ngSubmit)="onRecharge()"  class="card-footer">
          <div class="card-footer-item field is-horizontal has-addons">
            <label class="field-label is-normal">Kilometers to recharge: </label>
            <div class="control">
              <input [(ngModel)]="rechargedDistance" name="rechargedDistance" type="number" required class="input" >
            </div>
            <div class="control">
              <button type="submit" class="button is-primary" [disabled]="rechargingForm.form.invalid">Recharge</button>
            </div>
          </div>
        </form>
      </ng-template>
    </footer>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit {
  public car: Car;
  public speedClass = 'is-info';
  public batteryClass = 'is-success';
  public rechargedDistance = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = Cars.find(c => c.link.url === carId);
    setInterval(() => this.timeGoesBy(), 1000);
  }

  public onBrake() {
    this.car.currentSpeed -= 1 + (this.car.topSpeed - this.car.currentSpeed) / 10;
  }

  public onThrottle() {
    this.car.currentSpeed += 1 + (this.car.topSpeed - this.car.currentSpeed) / 10;
  }

  public onRecharge() {
    if (this.rechargedDistance > this.car.totalBattery) {
      this.rechargedDistance = this.car.totalBattery;
    }
    this.car.remainingBattery = this.rechargedDistance;
  }

  public hasBattery = () => this.car.remainingBattery > 0;

  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
  }
  private checkSpeed() {
    if (this.car.currentSpeed <= 1) {
      this.car.currentSpeed = 0;
    }
    const speedRate = this.car.currentSpeed / this.car.topSpeed;
    if (speedRate >= 0.9) {
      this.speedClass = 'is-danger';
    } else if (speedRate >= 0.7) {
      this.speedClass = 'is-warning';
    } else {
      this.speedClass = 'is-info';
    }
  }
  private checkBattery() {
    switch (true) {
      case this.car.remainingBattery <= this.car.currentSpeed / 60:
        this.stopCar();
        break;
      case this.car.remainingBattery <= 100:
        this.batteryClass = 'is-danger';
        this.travelDistance();
        break;
      case this.car.remainingBattery <= 150:
        this.batteryClass = 'is-warning';
        this.travelDistance();
        break;
      default:
        this.batteryClass = 'is-success';
        this.travelDistance();
        break;
    }
  }
  private stopCar() {
    this.car.currentSpeed = 0;
    this.car.distanceTraveled += this.car.remainingBattery;
    this.car.remainingBattery = 0;
  }
  private travelDistance() {
    this.car.distanceTraveled += this.car.currentSpeed / 60;
    this.car.remainingBattery -= this.car.currentSpeed / 60;
  }
}
