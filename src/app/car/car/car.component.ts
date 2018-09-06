import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CARS } from '../../core/store/cars';
import { INDICATORS } from '../../core/store/indicators';
import { Car } from '../../core/store/models/car.model';
import { statusClass } from '../../core/store/models/status-class';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit {
  public car: Car;
  public indicators = INDICATORS;
  private speedIndicator = this.indicators[0];
  private batteryIndicator = this.indicators[1];

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = CARS.find(c => c.link.url === carId);
    this.initilizeIndicators();
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
  }
  public onBrake() {
    this.car.currentSpeed -= 1 + (this.car.topSpeed - this.car.currentSpeed) / 10;
  }
  public onThrottle() {
    this.car.currentSpeed += 1 + (this.car.topSpeed - this.car.currentSpeed) / 10;
  }
  public onRecharge(rechargedDistance) {
    if (!rechargedDistance || rechargedDistance < 0) {
      return;
    }
    if (rechargedDistance > this.car.totalBattery) {
      rechargedDistance = this.car.totalBattery;
    }
    this.car.remainingBattery = rechargedDistance;
  }
  public hasBattery = () => this.car.remainingBattery > 0;
  public isBrakeDisabled = () => this.car.currentSpeed <= 0;
  public isThrottleDisabled = () => this.car.currentSpeed >= this.car.topSpeed;

  private initilizeIndicators() {
    this.speedIndicator.max = this.car.topSpeed;
    this.speedIndicator.tags[1].value = this.car.topSpeed;
    this.batteryIndicator.max = this.car.totalBattery;
    this.updateIndicators();
    this.indicators.push(this.speedIndicator, this.batteryIndicator);
  }
  private updateIndicators() {
    this.speedIndicator.value = this.car.currentSpeed;
    this.speedIndicator.class = this.getSpeedClass();
    this.speedIndicator.tags[0].value = this.car.currentSpeed;
    this.batteryIndicator.value = this.car.remainingBattery;
    this.batteryIndicator.class = this.getBatteryClass();
    this.batteryIndicator.tags[0].value = this.car.distanceTraveled;
    this.batteryIndicator.tags[1].value = this.car.remainingBattery;
  }
  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
  }
  private checkSpeed() {
    if (this.car.currentSpeed <= 1) {
      this.car.currentSpeed = 0;
    }
  }
  private getSpeedClass(): statusClass {
    const speedRate = this.car.currentSpeed / this.car.topSpeed;
    if (speedRate >= environment.dangerSpeedRate) {
      return 'is-danger';
    }
    if (speedRate >= environment.warningSpeedRate) {
      return 'is-warning';
    }
    return 'is-info';
  }
  private checkBattery() {
    if (this.car.remainingBattery <= this.car.currentSpeed) {
      this.stopCar();
    } else {
      this.travelDistance();
    }
  }
  private getBatteryClass(): statusClass {
    if (this.car.remainingBattery <= environment.dangerKmsBattery) {
      return 'is-danger';
    }
    if (this.car.remainingBattery <= environment.warningKmsBattery) {
      return 'is-warning';
    }
    return 'is-success';
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
