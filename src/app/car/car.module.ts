import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';

@NgModule({
  imports: [CommonModule, CarRoutingModule, SharedModule],
  declarations: [CarComponent]
})
export class CarModule {}
