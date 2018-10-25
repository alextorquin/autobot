import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GlobalStoreService } from '../../core/global-store.service';
import { Link } from '../../core/store/models/link.model';

@Component({
  selector: 'app-about',
  template: `
    <h1 class="title">Angular sample simple project </h1>
    <nav class="navbar" role="navigation" aria-label="about nested navigation">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a *ngFor="let link of links" class="navbar-item"  [routerLink]="link.routerLink">{{ link.caption }}</a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  public links: Link[] = [
    {
      routerLink: './links',
      caption: 'Links'
    },
    {
      routerLink: './info',
      caption: 'Info'
    }
  ];
  constructor(private globalStore: GlobalStoreService) {}

  ngOnInit() {
    this.globalStore.dispatchTitle('About Autobot');
  }
}
