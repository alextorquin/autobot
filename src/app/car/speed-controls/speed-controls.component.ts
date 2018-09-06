import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-speed-controls',
  templateUrl: './speed-controls.component.html',
  styles: []
})
export class SpeedControlsComponent implements OnInit {
  @Input()
  public brakeDisabled = false;
  @Input()
  public throttleDisabled = false;
  @Output()
  public brake = new EventEmitter<void>();
  @Output()
  public throttle = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
