import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CarComponent } from './car/car.component';

@Injectable()
export class TravelGuard implements CanDeactivate<CarComponent> {
  canDeactivate(
    component: CarComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (nextState.url.includes('auth')) {
      return true;
    }
    return component.canBeDeactivated();
  }
}
