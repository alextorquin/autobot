import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FooterComponent } from './navigator/footer.component';
import { HeaderComponent } from './navigator/header.component';
import { MainComponent } from './navigator/main.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AppEffects } from './store/app.effects';
import { metaReducers, reducers } from './store/state';

/*
 https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7
*/

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
    // StoreModule.forFeature('global', fromGlobal.reducers, { metaReducers: fromGlobal.metaReducers })
  ],
  declarations: [NavigatorComponent, HeaderComponent, MainComponent, FooterComponent],
  exports: [NavigatorComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
