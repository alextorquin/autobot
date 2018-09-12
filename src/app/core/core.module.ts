import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './navigator/footer.component';
import { HeaderComponent } from './navigator/header.component';
import { MainComponent } from './navigator/main.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [NavigatorComponent, HeaderComponent, MainComponent, FooterComponent],
  exports: [NavigatorComponent]
})
export class CoreModule {}
