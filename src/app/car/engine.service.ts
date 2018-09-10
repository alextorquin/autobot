import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';

@Injectable()
export class EngineService {
  private readonly oneHour = 3600;
  constructor() {}

  public hasBattery = (car: Car) => car.remainingBattery > 0;
  public isBrakeDisabled = (car: Car) => car.currentSpeed <= 0;
  public isThrottleDisabled = (car: Car) => car.currentSpeed >= car.topSpeed;
  private rawDeltaSpeed = (car: Car) => 1 + (car.topSpeed - car.currentSpeed);

  public brake(car: Car) {
    car.currentSpeed -= this.rawDeltaSpeed(car) / environment.factorSpeed;
  }
  public checkBattery(car: Car) {
    if (car.remainingBattery <= car.currentSpeed) {
      this.stopCar(car);
    } else {
      this.travelDistance(car);
    }
  }
  public checkSpeed(car: Car) {
    if (car.currentSpeed <= 1) {
      car.currentSpeed = 0;
    }
  }
  public recharge(rechargedDistance: number, car: Car) {
    car.remainingBattery = this.validateRecharging(rechargedDistance, car);
  }
  public throttle(car: Car) {
    car.currentSpeed += this.rawDeltaSpeed(car) / environment.factorSpeed;
  }
  private stopCar(car: Car) {
    car.currentSpeed = 0;
    car.distanceTraveled += car.remainingBattery;
    car.remainingBattery = 0;
  }
  private travelDistance(car: Car) {
    car.distanceTraveled += (car.currentSpeed / this.oneHour) * environment.timeTravel;
    car.remainingBattery -= (car.currentSpeed / this.oneHour) * environment.timeTravel;
  }
  private validateRecharging(rechargedDistance: number, car: Car) {
    let validatedRecharging = rechargedDistance;
    if (!rechargedDistance || rechargedDistance < 0) {
      validatedRecharging = 0;
    } else if (rechargedDistance > car.totalBattery) {
      validatedRecharging = car.totalBattery;
    }
    return validatedRecharging;
  }
}
