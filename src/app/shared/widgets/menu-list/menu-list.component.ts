import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../core/store/models/link.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styles: []
})
export class MenuListComponent implements OnInit {
  @Input()
  public caption: string;
  @Input()
  public links: Link[];
  constructor() {}

  ngOnInit() {}
}
