import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';

@Injectable()
export class EngineService {
  private readonly oneHourMillisecs: number = 3600;
  constructor() {}

  public hasBattery = (car: Car): boolean => car.remainingBattery > 0;
  public isBrakeDisabled = (car: Car): boolean => car.currentSpeed <= 0;
  public isThrottleDisabled = (car: Car): boolean => car.currentSpeed >= car.topSpeed;

  public brake(car: Car): void {
    car.currentSpeed -= this.deltaSpeed(car);
  }
  public throttle(car: Car): void {
    car.currentSpeed += this.deltaSpeed(car);
  }
  public recharge(rechargedDistance: number, car: Car): void {
    car.remainingBattery = this.getValidatedRecharging(rechargedDistance, car);
  }
  public checkBattery(car: Car): void {
    if (car.remainingBattery <= car.currentSpeed) {
      this.stopCar(car);
    } else {
      this.travelDistance(car);
    }
  }
  public checkSpeed(car: Car): void {
    if (car.currentSpeed <= 1) {
      car.currentSpeed = 0;
    }
  }

  private rawDeltaSpeed = (car: Car): number => 1 + (car.topSpeed - car.currentSpeed);
  private deltaSpeed = (car: Car): number => this.rawDeltaSpeed(car) / environment.factorSpeed;
  private stopCar(car: Car): void {
    car.currentSpeed = 0;
    car.distanceTraveled += car.remainingBattery;
    car.remainingBattery = 0;
  }
  private travelDistance = (car: Car): void => {
    car.distanceTraveled += (car.currentSpeed / this.oneHourMillisecs) * environment.timeTravel;
    car.remainingBattery -= (car.currentSpeed / this.oneHourMillisecs) * environment.timeTravel;
  };
  private getValidatedRecharging = (rechargedDistance: number, car: Car): number => {
    let validatedRecharging = rechargedDistance;
    if (!rechargedDistance || rechargedDistance < 0) {
      validatedRecharging = 0;
    } else if (rechargedDistance > car.totalBattery) {
      validatedRecharging = car.totalBattery;
    }
    return validatedRecharging;
  };
}
