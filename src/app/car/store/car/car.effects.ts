import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CarsService } from '../../../core/cars.service';
import { Car } from '../../../core/store/models/car.model';
import { Travel } from '../../../core/store/models/travel.model';
import { TravelsService } from '../../travels.service';
import {
  CarActions,
  CarActionTypes,
  LoadCar,
  LoadCarError,
  LoadCarOK,
  LoadTravel,
  LoadTravelError,
  LoadTravelOK,
  PostTravel,
  PostTravelError,
  PostTravelOK
} from './car.actions';

@Injectable()
export class CarEffects {
  constructor(
    private actions$: Actions,
    private cars: CarsService,
    private travels: TravelsService
  ) {}

  @Effect()
  public loadCarEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<LoadCar>(CarActionTypes.LoadCar),
    mergeMap((action: LoadCar) =>
      this.cars.getCarByLinkId$(action.payload).pipe(
        map((car: Car) => new LoadCarOK(car)),
        catchError(err => of(new LoadCarError('Error loading car')))
      )
    )
  );

  @Effect()
  public loadTravelEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<LoadTravel>(CarActionTypes.LoadTravel),
    mergeMap((action: LoadTravel) =>
      this.travels.getCarTravelByCar$(action.payload).pipe(
        map((travel: Travel) => new LoadTravelOK(travel)),
        catchError(
          (err: HttpErrorResponse): Observable<CarActions> => {
            if (err.status === 404) {
              return of(new PostTravel(action.payload));
            } else {
              return of(
                new LoadTravelError('Error loading travel. Try Insert')
              );
            }
          }
        )
      )
    )
  );

  @Effect()
  public postTravelEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<PostTravel>(CarActionTypes.PostTravel),
    mergeMap((action: PostTravel) =>
      this.travels.postCarTravel$(action.payload).pipe(
        map((travel: Travel) => new PostTravelOK(travel)),
        catchError(err => of(new PostTravelError('Error porting car')))
      )
    )
  );
}
