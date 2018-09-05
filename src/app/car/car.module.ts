import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { SpeedControlsComponent } from './speed-controls/speed-controls.component';
import { BatteryRechargerComponent } from './battery-recharger/battery-recharger.component';

@NgModule({
  imports: [CommonModule, CarRoutingModule, SharedModule],
  declarations: [CarComponent, IndicatorComponent, SpeedControlsComponent, BatteryRechargerComponent]
})
export class CarModule {}
