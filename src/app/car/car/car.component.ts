import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GlobalStoreService } from '../../core/global-store.service';
import { Car } from '../../core/store/models/car.model';
import { Travel } from '../../core/store/models/travel.model';
import { RootState } from '../../core/store/state/root/root.state';
import { DisplayService } from '../display.service';
import { EngineService } from '../engine.service';
import {
  Brake,
  DeleteTravel,
  LoadCar,
  LoadTravel,
  Recharge,
  Throttle,
  UpdateIndicators,
  UpdateTravel
} from '../store/car/car.actions';
import { canBeDeactivatedSelector, carSelector, indicatorsSelector, travelSelector } from '../store/car/car.state';
import { Indicator } from '../store/models/indicator.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit, OnDestroy {
  public car: Car;
  public indicators$: Observable<Indicator[]>;
  public travel$: Observable<Travel>;
  public car$: Observable<Car>;
  private intervalSubscription: Subscription;
  private _canBeDeactivated = true;

  constructor(
    private route: ActivatedRoute,
    private display: DisplayService,
    private engine: EngineService,
    private globalStore: GlobalStoreService,
    private store: Store<RootState>
  ) {}

  public ngOnInit() {
    this.globalStore.dispatchTitle('Car loading...');
    this.loadCar();
    this.subscribeToChanges();
  }
  public canBeDeactivated() {
    if (this._canBeDeactivated) {
      this.globalStore.dispatchUserMessage('You can go your own away ;-)');
    } else {
      this.globalStore.dispatchUserMessage('Save or delete before exit !!');
    }
    return this._canBeDeactivated;
  }
  public ngOnDestroy(): void {
    if (this.intervalSubscription == null) {
      return;
    }
    this.intervalSubscription.unsubscribe();
  }

  public onBrake = (): void => {
    this.engine.brake(this.car);
    this.store.dispatch(new Brake(this.car));
  };
  public onThrottle = (): void => {
    this.engine.throttle(this.car);
    this.store.dispatch(new Throttle(this.car));
  };
  public onRecharge = (rechargedDistance: number): void => {
    this.engine.recharge(rechargedDistance, this.car);
    this.store.dispatch(new Recharge(this.car));
  };
  public onSaveTravel = () => this.store.dispatch(new UpdateTravel(this.car));
  public onDeleteTravel = () => this.store.dispatch(new DeleteTravel(this.car));

  public hasBattery = (): boolean => this.engine.hasBattery(this.car);
  public isBrakeDisabled = (): boolean => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = (): boolean => this.engine.isThrottleDisabled(this.car);

  private loadCar() {
    this.globalStore.dispatchUserMessage('Loading data !!');
    this.route.params
      .pipe(map((params: Params): string => params['carId']))
      .subscribe((carId: string) => this.store.dispatch(new LoadCar(carId)));
  }
  private subscribeToChanges() {
    this.car$ = this.store.select(carSelector).pipe(tap(this.onCarGotten));
    this.indicators$ = this.store.select(indicatorsSelector);
    this.travel$ = this.store.select(travelSelector).pipe(
      filter(travel => travel != null),
      take(1),
      tap(this.onCarTravelGotten)
    );
    this.store.select(canBeDeactivatedSelector).subscribe(canBeDeactivated => (this._canBeDeactivated = canBeDeactivated));
    this.intervalSubscription = interval(environment.refreshInterval).subscribe(this.timeGoesBy);
  }
  private onCarGotten = (car: Car): void => {
    if (car == null) {
      return;
    }
    if (this.car == null) {
      this.globalStore.dispatchTitle(car.name);
      const indicators = this.display.initilizeIndicators(car);
      this.store.dispatch(new UpdateIndicators(indicators));
      this.store.dispatch(new LoadTravel(car));
    }
    this.car = car;
    this.updateIndicators();
  };
  private onCarTravelGotten = (travel: Travel) => {
    this.engine.updateCarTravelData(this.car, travel);
    this.globalStore.dispatchUserMessage('Ride like the wind!!');
    this.updateIndicators();
  };
  private timeGoesBy = (intervalNumber: number): void => {
    if (this.car == null) {
      return;
    }
    this.updateIndicators();
  };
  private updateIndicators() {
    this.engine.checkBattery(this.car);
    const indicators = this.display.updateIndicators(this.car);
    this.store.dispatch(new UpdateIndicators(indicators));
  }
}
