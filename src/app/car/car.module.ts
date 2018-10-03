import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { BatteryRechargerComponent } from './battery-recharger/battery-recharger.component';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { DisplayService } from './display.service';
import { DriverCockpitComponent } from './driver-cockpit/driver-cockpit.component';
import { EngineService } from './engine.service';
import { IndicatorComponent } from './indicator/indicator.component';
import { SpeedControlsComponent } from './speed-controls/speed-controls.component';
import { CarEffects } from './store/car/car.effects';
import * as fromCar from './store/car/car.reducer';
import { TravelManagerComponent } from './travel-manager/travel-manager.component';
import { TravelGuard } from './travel.guard';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    StoreModule.forFeature('car', fromCar.carReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  declarations: [
    CarComponent,
    IndicatorComponent,
    SpeedControlsComponent,
    BatteryRechargerComponent,
    DriverCockpitComponent,
    TravelManagerComponent
  ],
  providers: [DisplayService, EngineService, TravelGuard]
})
export class CarModule {}
