import { Component, OnInit } from '@angular/core';
import { Link } from '../../core/store/models/link.model';

@Component({
  selector: 'app-links',
  template: `
    <app-menu-list
      caption="Links to learn Angular:"
      i18n-caption="@@about_links_caption"
      [links]="links"
    >
    </app-menu-list>
  `,
  styles: []
})
export class LinksComponent implements OnInit {
  public links: Link[] = [
    {
      href: 'https://academia-binaria.com/hola-angular-cli/',
      caption: 'Tutorial en español'
    },
    {
      href: 'https://github.com/AcademiaBinaria/autobot/',
      caption: 'GitHub Repository'
    },
    {
      href: 'https://blog.angular.io/',
      caption: 'Angular blog'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
