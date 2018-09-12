import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
    this.route.params
      .pipe(
        map(params => params['carId']),
        switchMap(carId => this.cars.getCarByLinkId$(carId))
      )
      .pipe(
        tap(car => this.onCarGotted(car)),
        switchMap(() => interval(environment.refreshInterval))
      )
      .subscribe(() => this.timeGoesBy());
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

  private onCarGotted(car: Car) {
    this.car = car;
    this.initilizeIndicators();
    this.timeGoesBy();
  }

  private timeGoesBy() {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
  }
}
