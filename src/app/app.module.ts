import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
