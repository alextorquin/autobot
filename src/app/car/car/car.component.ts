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
          Current speed : {{ car.currentSpeed }} km/h of {{ car.topSpeed }} km/h top speed
          <progress class="progress is-info" [value]="car.currentSpeed" [max]="car.topSpeed"></progress>
        </div>
        <br>
        <div>
          Total traveled : {{ car.distanceTraveled }} km. You can travel {{ car.remainingBattery }} km.
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  public car: Car;
  public batteryClass = 'is-success';
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
    if (this.rechargedDistance > this.car.totalBattery) {
      this.rechargedDistance = this.car.totalBattery;
    }
    this.car.remainingBattery = this.rechargedDistance;
    this.checkBattery();
  }

  public hasBattery = () => this.car.remainingBattery > 0;

  private checkBattery() {
    switch (true) {
      case this.car.remainingBattery <= this.car.currentSpeed:
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
    this.car.distanceTraveled += this.car.currentSpeed;
    this.car.remainingBattery -= this.car.currentSpeed;
  }
}
