import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styles: []
})
export class IndicatorComponent implements OnInit {
  @Input()
  public indicator: any;

  constructor() {}

  ngOnInit() {}
}
