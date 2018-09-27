import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../core/store/models/car.model';
import { Indicator } from '../store/models/indicator.model';

@Component({
  selector: 'app-driver-cockpit',
  templateUrl: './driver-cockpit.component.html',
  styles: []
})
export class DriverCockpitComponent implements OnInit {
  @Input()
  public car: Car;
  @Input()
  public indicators: Indicator[];
  @Input()
  public hasBattery: boolean;
  @Input()
  public isBrakeDisabled: boolean;
  @Input()
  public isThrottleDisabled: boolean;
  @Output()
  public brake = new EventEmitter<void>();
  @Output()
  public throttle = new EventEmitter<void>();
  @Output()
  public recharge = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
