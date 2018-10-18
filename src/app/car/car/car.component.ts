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
    private activatedRoute: ActivatedRoute,
    private displayService: DisplayService,
    private carsService: CarsService,
    public engineService: EngineService
  ) {}

  public ngOnInit() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.car = this.carsService.getCarByLinkId(carId);
    this.initilizeIndicators();
    this.timeGoesBy();
    setInterval(() => this.timeGoesBy(), environment.refreshInterval);
  }
  public onBrake = () => this.engineService.brake(this.car);
  public onThrottle = () => this.engineService.throttle(this.car);
  public onRecharge = rechargedDistance => this.engineService.recharge(rechargedDistance, this.car);

  public hasBattery = () => this.engineService.hasBattery(this.car);
  public isBrakeDisabled = () => this.engineService.isBrakeDisabled(this.car);
  public isThrottleDisabled = () => this.engineService.isThrottleDisabled(this.car);

  private initilizeIndicators = () => (this.indicators = this.displayService.initilizeIndicators(this.car));
  private updateIndicators = () => (this.indicators = this.displayService.updateIndicators(this.car));
  private checkSpeed = () => this.engineService.checkSpeed(this.car);
  private checkBattery = () => this.engineService.checkBattery(this.car);

  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
  }
}
