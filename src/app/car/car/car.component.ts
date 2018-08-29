import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
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
      <span class="card-header-icon">{{ car.cost | currency:'EUR' }}</span>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Speed</span>
              <span class="tag is-info">{{ car.currentSpeed | number:'1.0-0' }}</span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Top</span>
              <span class="tag is-danger">{{ car.topSpeed }}</span>
            </div>
          </div>
        </div>
        <progress [ngClass]="['progress', speedClass]" [value]="car.currentSpeed" [max]="car.topSpeed"></progress>
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Traveled</span>
              <span class="tag is-success">{{ car.distanceTraveled | number:'1.2-2' }}</span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Reamining</span>
              <span class="tag is-danger">{{ car.remainingBattery | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>
        <progress [ngClass]="['progress', batteryClass]" [value]="car.remainingBattery" [max]="car.totalBattery"></progress>
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
          <div class="card-footer-item ">
            <div class="field has-addons">
              <div class="control">
                <input [(ngModel)]="rechargedDistance" name="rechargedDistance" type="number" required class="input" placeholder="Kilometers">
              </div>
              <div class="control">
                <button type="submit" class="button is-primary" [disabled]="rechargingForm.form.invalid">Recharge</button>
              </div>
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
  public rechargedDistance;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = Cars.find(c => c.link.url === carId);
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
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
    if (speedRate >= environment.dangerSpeedRate) {
      this.speedClass = 'is-danger';
    } else if (speedRate >= environment.warningSpeedRate) {
      this.speedClass = 'is-warning';
    } else {
      this.speedClass = 'is-info';
    }
  }
  private checkBattery() {
    switch (true) {
      case this.car.remainingBattery <= this.car.currentSpeed:
        this.stopCar();
        break;
      case this.car.remainingBattery <= environment.dangerKmsBattery:
        this.batteryClass = 'is-danger';
        this.travelDistance();
        break;
      case this.car.remainingBattery <= environment.warningKmsBattery:
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
