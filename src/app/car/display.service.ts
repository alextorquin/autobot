import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';
import { statusClass } from '../core/store/models/status-class.type';
import { INDICATORS } from './store/indicators';
import { Indicator } from './store/models/indicator.model';

@Injectable()
export class DisplayService {
  public indicators = INDICATORS;
  private speedIndicator = this.indicators[0];
  private batteryIndicator = this.indicators[1];

  constructor() {}

  public initilizeIndicators(car: Car): Indicator[] {
    this.speedIndicator.max = car.topSpeed;
    this.speedIndicator.tags[1].value = car.topSpeed;
    this.batteryIndicator.max = car.totalBattery;
    this.updateIndicators(car);
    return this.indicators;
  }
  public updateIndicators(car: Car): Indicator[] {
    this.speedIndicator.value = car.currentSpeed;
    this.speedIndicator.class = this.getSpeedClass(car);
    this.speedIndicator.tags[0].value = car.currentSpeed;
    this.batteryIndicator.value = car.remainingBattery;
    this.batteryIndicator.class = this.getBatteryClass(car);
    this.batteryIndicator.tags[0].value = car.distanceTraveled;
    this.batteryIndicator.tags[1].value = car.remainingBattery;
    return this.indicators;
  }

  private getBatteryClass(car: Car): statusClass {
    if (car.remainingBattery <= environment.dangerKmsBattery) {
      return 'is-danger';
    }
    if (car.remainingBattery <= environment.warningKmsBattery) {
      return 'is-warning';
    }
    return 'is-success';
  }
  private getSpeedClass(car: Car): statusClass {
    const speedRate = car.currentSpeed / car.topSpeed;
    if (speedRate >= environment.dangerSpeedRate) {
      return 'is-danger';
    }
    if (speedRate >= environment.warningSpeedRate) {
      return 'is-warning';
    }
    return 'is-info';
  }
}
