import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalStoreService } from '../global-store.service';
import { SendUserMesage } from '../store/global/global.actions';
import { selectUserMessage, State } from '../store/state';

@Component({
  selector: 'app-navigator',
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer [message]="userMessage$ | async"></app-footer>
  `,
  styles: []
})
export class NavigatorComponent implements OnInit {
  public userMessage$;
  constructor(private globalStore: GlobalStoreService, private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.globalStore.selectLoginNeeded$().subscribe(loginNeeded => {
      if (loginNeeded) {
        this.router.navigateByUrl('/auth');
      } else {
        this.router.navigateByUrl('/');
      }
      this.store.dispatch(new SendUserMesage('Testing NgRx'));
    });
    // this.userMessage$ = this.globalStore.selectUserMessage$();
    this.userMessage$ = this.store.select(selectUserMessage);
  }
}
