import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { TravelGuard } from './travel.guard';

const routes: Routes = [
  {
    path: ':carId',
    component: CarComponent,
    canDeactivate: [TravelGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}
