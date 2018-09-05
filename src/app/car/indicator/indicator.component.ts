import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styles: []
})
export class IndicatorComponent implements OnInit {
  @Input()
  tags: any[];
  @Input()
  indicatorClass: string;
  @Input()
  value: number;
  @Input()
  max: number;

  constructor() {}

  ngOnInit() {}
}
