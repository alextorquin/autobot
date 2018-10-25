import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
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
  constructor(private globalStore: GlobalStoreService, private router: Router, private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({ property: 'og:title', content: environment.title }, true);
    this.globalStore.selectLoginNeeded$().subscribe(this.onLoginNeededChange);
    this.userMessage$ = this.globalStore.selectUserMessage$();
    this.globalStore.selectTitle$().subscribe(title => {
      this.title.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
    });
  }

  private onLoginNeededChange = (loginNeeded: boolean) => {
    if (loginNeeded) {
      this.router.navigateByUrl('/auth');
    } else {
      this.router.navigateByUrl('/');
    }
  };
}
