import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './about/info.component';
import { LinksComponent } from './about/links.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  declarations: [AboutComponent, LinksComponent, InfoComponent]
})
export class AboutModule {}
