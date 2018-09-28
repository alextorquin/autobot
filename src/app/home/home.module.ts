import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarsResolverService } from './cars-resolver.service';
import { HomeAComponent } from './home-a/home-a.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, HomeAComponent],
  providers: [CarsResolverService]
})
export class HomeModule {}
