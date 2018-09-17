import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsResolverService } from './cars-resolver.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cars: CarsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
