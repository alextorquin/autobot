import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BatteryRechargerComponent } from './battery-recharger/battery-recharger.component';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { DisplayService } from './display.service';
import { EngineService } from './engine.service';
import { IndicatorComponent } from './indicator/indicator.component';
import { SpeedControlsComponent } from './speed-controls/speed-controls.component';
import { TravelGuard } from './travel.guard';
import { DriverCockpitComponent } from './driver-cockpit/driver-cockpit.component';
import { TravelManagerComponent } from './travel-manager/travel-manager.component';

@NgModule({
  imports: [CommonModule, CarRoutingModule, SharedModule],
  declarations: [CarComponent, IndicatorComponent, SpeedControlsComponent, BatteryRechargerComponent, DriverCockpitComponent, TravelManagerComponent],
  providers: [DisplayService, EngineService, TravelGuard]
})
export class CarModule {}
