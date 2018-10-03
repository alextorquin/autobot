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
  DeleteTravel,
  DeleteTravelError,
  DeleteTravelOK,
  InsertTravel,
  InsertTravelError,
  InsertTravelOK,
  LoadCar,
  LoadCarError,
  LoadCarOK,
  LoadTravel,
  LoadTravelError,
  LoadTravelOK,
  UpdateTravel,
  UpdateTravelError,
  UpdateTravelOK
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
              return of(new InsertTravel(action.payload));
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
  public InsertTravelEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<InsertTravel>(CarActionTypes.InsertTravel),
    mergeMap((action: InsertTravel) =>
      this.travels.postCarTravel$(action.payload).pipe(
        map((travel: Travel) => new InsertTravelOK(travel)),
        catchError(err => of(new InsertTravelError('Error inserting travel')))
      )
    )
  );

  @Effect()
  public UpdateTravelEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<UpdateTravel>(CarActionTypes.UpdateTravel),
    mergeMap((action: UpdateTravel) =>
      this.travels.putCarTravel$(action.payload).pipe(
        map((travel: Travel) => new UpdateTravelOK(travel)),
        catchError(err => of(new UpdateTravelError('Error updating travel')))
      )
    )
  );

  @Effect()
  public DeleteTravelEffect$: Observable<CarActions> = this.actions$.pipe(
    ofType<DeleteTravel>(CarActionTypes.DeleteTravel),
    mergeMap((action: DeleteTravel) =>
      this.travels.deleteCarTravel$(action.payload).pipe(
        map(() => new DeleteTravelOK()),
        catchError(err => of(new DeleteTravelError('Error deleting travel')))
      )
    )
  );
}
