import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { INDICATORS } from '../../core/store/indicators';
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
  public indicators = INDICATORS;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private displayService: DisplayService,
    private engine: EngineService
  ) {}

  public ngOnInit() {
    const carId = this.route.snapshot.params['carId'];
    this.car = this.carsService.getCarByLinkId(carId);
    this.initilizeIndicators();
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
  }
  public onBrake = () => this.engine.brake(this.car);
  public onThrottle = () => this.engine.throttle(this.car);
  public onRecharge = rechargedDistance => this.engine.recharge(rechargedDistance, this.car);

  public hasBattery = () => this.engine.hasBattery(this.car);
  public isBrakeDisabled = () => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = () => this.engine.isThrottleDisabled(this.car);

  private initilizeIndicators() {
    this.indicators = this.displayService.initilizeIndicators(this.car);
    this.timeGoesBy();
  }
  private updateIndicators() {
    this.indicators = this.displayService.updateIndicators(this.car);
  }
  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
  }
  private checkSpeed = () => this.engine.checkSpeed(this.car);
  private checkBattery = () => this.engine.checkBattery(this.car);
}
