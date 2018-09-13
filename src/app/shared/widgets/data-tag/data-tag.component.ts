import { Component, Input, OnInit } from '@angular/core';
import { statusClass } from '../../../core/store/models/status-class.type';

@Component({
  selector: 'app-data-tag',
  templateUrl: './data-tag.component.html',
  styles: []
})
export class DataTagComponent implements OnInit {
  @Input()
  public caption: string;
  @Input()
  public value: string;
  @Input()
  public tagClass: statusClass;

  constructor() {}

  ngOnInit() {}
}
