import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, StoreModule.forRoot(reducers, { metaReducers }), EffectsModule.forRoot([AppEffects])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
