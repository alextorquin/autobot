import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { GlobalStoreService } from '../global-store.service';

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
  constructor(
    private globalStore: GlobalStoreService,
    private router: Router,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.globalStore.selectLoginNeeded$().subscribe(this.onLoginNeededChange);
    this.userMessage$ = this.globalStore.selectUserMessage$();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const appData = event.available.appData;
        const versionMessage = appData
          ? appData['versionMessage']
          : 'New version is available!';
        this.globalStore.dispatchUserMessage(versionMessage);
        const msg = `${versionMessage} Do you want to update?`;
        if (confirm(msg)) {
          window.location.reload();
        }
      });
    }
  }

  private onLoginNeededChange = (loginNeeded: boolean) => {
    if (loginNeeded) {
      this.router.navigateByUrl('/auth');
    } else {
      this.router.navigateByUrl('/');
    }
  };
}
