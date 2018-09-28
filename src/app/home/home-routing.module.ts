import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsResolverService } from './cars-resolver.service';
import { HomeAComponent } from './home-a/home-a.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cars: CarsResolverService
    }
  },
  {
    path: 'a',
    component: HomeAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
