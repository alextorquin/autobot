import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CARS } from '../../core/store/cars';
import { Car } from '../../core/store/models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit {
  public car: Car;
  public speedClass = 'is-info';
  public batteryClass = 'is-success';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = CARS.find(c => c.link.url === carId);
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
