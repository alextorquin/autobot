import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-battery-recharger',
  templateUrl: './battery-recharger.component.html',
  styles: []
})
export class BatteryRechargerComponent implements OnInit {
  @Output()
  public recharge = new EventEmitter<number>();

  public rechargedDistance = 0;

  constructor() {}

  ngOnInit() {}
}
