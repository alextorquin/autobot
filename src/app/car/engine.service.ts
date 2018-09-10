import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../core/store/models/car.model';

@Injectable()
export class EngineService {
  private readonly oneHour = 3600;
  constructor() {}

  public hasBattery = (car: Car): boolean => car.remainingBattery > 0;
  public isBrakeDisabled = (car: Car): boolean => car.currentSpeed <= 0;
  public isThrottleDisabled = (car: Car): boolean => car.currentSpeed >= car.topSpeed;

  public brake(car: Car) {
    car.currentSpeed -= this.deltaSpeed(car);
  }
  public throttle(car: Car) {
    car.currentSpeed += this.deltaSpeed(car);
  }
  public recharge(rechargedDistance: number, car: Car) {
    car.remainingBattery = this.getValidatedRecharging(rechargedDistance, car);
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

  private rawDeltaSpeed = (car: Car): number => 1 + (car.topSpeed - car.currentSpeed);
  private deltaSpeed = (car: Car): number => this.rawDeltaSpeed(car) / environment.factorSpeed;
  private stopCar(car: Car) {
    car.currentSpeed = 0;
    car.distanceTraveled += car.remainingBattery;
    car.remainingBattery = 0;
  }
  private travelDistance(car: Car) {
    car.distanceTraveled += (car.currentSpeed / this.oneHour) * environment.timeTravel;
    car.remainingBattery -= (car.currentSpeed / this.oneHour) * environment.timeTravel;
  }
  private getValidatedRecharging(rechargedDistance: number, car: Car) {
    let validatedRecharging = rechargedDistance;
    if (!rechargedDistance || rechargedDistance < 0) {
      validatedRecharging = 0;
    } else if (rechargedDistance > car.totalBattery) {
      validatedRecharging = car.totalBattery;
    }
    return validatedRecharging;
  }
}
