import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  template: `
  <h2 class="subtitle">Links to learn Angular: </h2>
  <ul>
    <li *ngFor="let link of links">
      <h2><a target="_blank" rel="noopener" [href]="link.url">{{ link.caption }}</a></h2>
    </li>
  </ul>
  `,
  styles: []
})
export class LinksComponent implements OnInit {
  public links = [
    {
      url: 'https://academia-binaria.com/hola-angular-cli/',
      caption: 'Tutorial en español'
    },
    {
      url: 'https://github.com/AcademiaBinaria/autobot/',
      caption: 'GitHub Repository'
    },
    {
      url: 'https://blog.angular.io/',
      caption: 'Angular blog'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
