import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { Car } from '../../core/store/models/car.model';
import { DisplayService } from '../display.service';
import { EngineService } from '../engine.service';
import { Indicator } from '../store/models/indicator.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit, OnDestroy {
  public car: Car;
  public indicators: Indicator[];
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cars: CarsService,
    private display: DisplayService,
    private engine: EngineService
  ) {}

  public ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params: Params) => params['carId']),
        switchMap((carId: string) => this.cars.getCarByLinkId$(carId))
      )
      .pipe(
        tap(this.onCarGotted),
        switchMap(() => interval(environment.refreshInterval))
      )
      .subscribe(this.timeGoesBy);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  private onCarGotted = (car: Car): void => {
    this.car = car;
    this.initilizeIndicators();
    this.timeGoesBy();
  };

  private timeGoesBy = (): void => {
    this.checkSpeed();
    this.checkBattery();
    this.updateIndicators();
    // console.log('car', this.car);
  };
}
