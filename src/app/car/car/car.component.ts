import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { Car } from '../../core/store/models/car.model';
import { DisplayService } from '../display.service';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit {
  public car: Car;
  public indicators;

  constructor(
    private route: ActivatedRoute,
    private cars: CarsService,
    private display: DisplayService,
    private engine: EngineService
  ) {}

  public ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = this.cars.getCarByLinkId(carId);
    this.initilizeIndicators();
    this.timeGoesBy();
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
  }
  public onBrake = () => this.engine.brake(this.car);
  public onThrottle = () => this.engine.throttle(this.car);
  public onRecharge = rechargedDistance => this.engine.recharge(rechargedDistance, this.car);

  public hasBattery = () => this.engine.hasBattery(this.car);
  public isBrakeDisabled = () => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = () => this.engine.isThrottleDisabled(this.car);

  private initilizeIndicators = () => (this.indicators = this.display.initilizeIndicators(this.car));
  private updateIndicators = () => (this.indicators = this.display.updateIndicators(this.car));
  private checkSpeed = () => this.engine.checkSpeed(this.car);
  private checkBattery = () => this.engine.checkBattery(this.car);

  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
  }
}
