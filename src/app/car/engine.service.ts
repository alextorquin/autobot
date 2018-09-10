import { Injectable } from '@angular/core';
import { Car } from '../core/store/models/car.model';

@Injectable()
export class EngineService {
  constructor() {}

  public brake(car: Car) {
    car.currentSpeed -= 1 + (car.topSpeed - car.currentSpeed) / 10;
  }
  public throttle(car: Car) {
    car.currentSpeed += 1 + (car.topSpeed - car.currentSpeed) / 10;
  }
  public recharge(rechargedDistance: number, car: Car) {
    if (!rechargedDistance || rechargedDistance < 0) {
      return;
    }
    if (rechargedDistance > car.totalBattery) {
      rechargedDistance = car.totalBattery;
    }
    car.remainingBattery = rechargedDistance;
  }
  public hasBattery = (car: Car) => car.remainingBattery > 0;
  public isBrakeDisabled = (car: Car) => car.currentSpeed <= 0;
  public isThrottleDisabled = (car: Car) => car.currentSpeed >= car.topSpeed;

  public checkSpeed(car: Car) {
    if (car.currentSpeed <= 1) {
      car.currentSpeed = 0;
    }
  }
  public checkBattery(car: Car) {
    if (car.remainingBattery <= car.currentSpeed) {
      this.stopCar(car);
    } else {
      this.travelDistance(car);
    }
  }

  private stopCar(car: Car) {
    car.currentSpeed = 0;
    car.distanceTraveled += car.remainingBattery;
    car.remainingBattery = 0;
  }
  private travelDistance(car: Car) {
    car.distanceTraveled += car.currentSpeed;
    car.remainingBattery -= car.currentSpeed;
  }
}
