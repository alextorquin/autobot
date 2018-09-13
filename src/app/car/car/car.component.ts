import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { Car } from '../../core/store/models/car.model';
import { Travel } from '../../core/store/models/travel.model';
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
  private travel: Travel;
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
        switchMap((car: Car) => this.cars.getTravel$(this.travel))
      )
      .pipe(
        tap(this.onTravelGotted),
        switchMap(() => interval(environment.refreshInterval))
      )
      .subscribe(this.timeGoesBy);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onBrake = (): void => this.engine.brake(this.car);
  public onThrottle = (): void => this.engine.throttle(this.car);
  public onRecharge = (rechargedDistance: number): void => this.engine.recharge(rechargedDistance, this.car);
  public onSaveTravel = () => this.cars.putTravel$(this.travel).subscribe();
  public onDeleteTravel = () => this.cars.deleteTravel$(this.travel).subscribe();

  public hasBattery = (): boolean => this.engine.hasBattery(this.car);
  public isBrakeDisabled = (): boolean => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = (): boolean => this.engine.isThrottleDisabled(this.car);

  private onCarGotted = (car: Car): void => {
    this.car = car;
    this.initTravel();
    this.indicators = this.display.initilizeIndicators(this.car);
    this.timeGoesBy();
  };

  private timeGoesBy = (): void => {
    this.engine.checkSpeed(this.car);
    this.engine.checkBattery(this.car);
    this.indicators = this.display.updateIndicators(this.car);
    this.updateTravel();
    // console.log('car', this.car);
  };

  private updateTravel = () => {
    this.travel = {
      _id: '@' + this.car.link.routerLink,
      currentSpeed: this.car.currentSpeed,
      remainingBattery: this.car.remainingBattery,
      distanceTraveled: this.car.distanceTraveled
    };
  };
  private initTravel = () => {
    this.travel = {
      _id: '@' + this.car.link.routerLink,
      currentSpeed: this.car.currentSpeed,
      remainingBattery: this.car.remainingBattery,
      distanceTraveled: this.car.distanceTraveled
    };
  };
  private onTravelGotted = (travel: Travel) => {
    this.travel = travel;
    this.car.currentSpeed = travel.currentSpeed;
    this.car.remainingBattery = travel.remainingBattery;
    this.car.distanceTraveled = travel.distanceTraveled;
  };
}
