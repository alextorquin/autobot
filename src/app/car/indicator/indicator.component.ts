import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../store/models/indicator.model';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styles: []
})
export class IndicatorComponent implements OnInit {
  @Input()
  public indicator: Indicator;

  constructor() {}

  ngOnInit() {}
}
