import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './navigator/footer.component';
import { HeaderComponent } from './navigator/header.component';
import { MainComponent } from './navigator/main.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigatorComponent, HeaderComponent, MainComponent, FooterComponent],
  exports: [NavigatorComponent]
})
export class CoreModule {}
