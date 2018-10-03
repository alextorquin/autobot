import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GlobalStoreService } from '../../core/global-store.service';
import { Car } from '../../core/store/models/car.model';
import { Travel } from '../../core/store/models/travel.model';
import { RootState } from '../../core/store/state/root/root.state';
import { DisplayService } from '../display.service';
import { EngineService } from '../engine.service';
import {
  DeleteTravel,
  LoadCar,
  LoadTravel,
  UpdateTravel
} from '../store/car/car.actions';
import {
  canDeactivateSelector,
  carSelector,
  travelSelector
} from '../store/car/car.state';
import { Indicator } from '../store/models/indicator.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit, OnDestroy {
  public car: Car;
  public indicators: Indicator[];
  public hasTravelData = false;
  private subscription: Subscription;
  private hasPendingChanges = false;

  constructor(
    private route: ActivatedRoute,
    private display: DisplayService,
    private engine: EngineService,
    private globalStore: GlobalStoreService,
    private cdRef: ChangeDetectorRef,
    private store: Store<RootState>
  ) {}

  public ngOnInit() {
    this.globalStore.dispatchUserMessage('Loading travel data !!');
    this.store
      .select(canDeactivateSelector)
      .subscribe(canDeactivate => (this.hasPendingChanges = !canDeactivate));
    this.subscription = this.route.params
      .pipe(
        map((params: Params): string => params['carId']),
        tap((carId: string) => this.store.dispatch(new LoadCar(carId))),
        switchMap(
          (carId: string): Observable<Car> =>
            this.store.select(carSelector).pipe(
              filter(car => car != null),
              take(1)
            )
        ),
        tap(this.onCarGotten),
        switchMap(
          (car: Car): Observable<Travel> =>
            this.store.select(travelSelector).pipe(
              filter(travel => travel != null),
              take(1)
            )
        ),
        tap(this.onCarTravelGotten),
        switchMap(
          (travel: Travel): Observable<number> =>
            interval(environment.refreshInterval)
        )
      )
      .subscribe(this.timeGoesBy);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public canBeDeactivated() {
    // if (!this.hasTravelData) {
    //   return true;
    // }
    if (this.hasPendingChanges) {
      this.globalStore.dispatchUserMessage('Save or delete before exit !!');
      return false;
    } else {
      this.globalStore.dispatchUserMessage('You can go your own away ;-)');
      return true;
    }
  }

  public onBrake = (): void => {
    this.engine.brake(this.car);
    this.hasPendingChanges = true;
    this.timeGoesBy(0);
  };
  public onThrottle = (): void => {
    this.engine.throttle(this.car);
    this.hasPendingChanges = true;
    this.timeGoesBy(0);
  };
  public onRecharge = (rechargedDistance: number): void =>
    this.engine.recharge(rechargedDistance, this.car);

  public onSaveTravel = () => this.store.dispatch(new UpdateTravel(this.car));

  public onDeleteTravel = () => this.store.dispatch(new DeleteTravel(this.car));

  public hasBattery = (): boolean => this.engine.hasBattery(this.car);
  public isBrakeDisabled = (): boolean => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = (): boolean =>
    this.engine.isThrottleDisabled(this.car);

  private onCarGotten = (car: Car): void => {
    this.car = car;
    this.indicators = this.display.initilizeIndicators(this.car);
    this.store.dispatch(new LoadTravel(car));
    this.updateChanges();
  };
  private onCarTravelGotten = (travel: Travel) => {
    this.car.currentSpeed = travel.currentSpeed;
    this.car.remainingBattery = travel.remainingBattery;
    this.car.distanceTraveled = travel.distanceTraveled;
    this.car.owner = travel.owner;
    this.hasTravelData = true;
    this.globalStore.dispatchUserMessage('Ride like the wind!!');
    this.updateChanges();
  };
  private timeGoesBy = (intervalNumber: number): void => {
    this.engine.checkBattery(this.car);
    this.updateChanges();
  };
  private updateChanges() {
    this.indicators = this.display.updateIndicators(this.car);
    this.cdRef.detectChanges();
  }
}
