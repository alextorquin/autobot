import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-battery-recharger',
  templateUrl: './battery-recharger.component.html',
  styles: []
})
export class BatteryRechargerComponent implements OnInit {
  @Output()
  public recharge = new EventEmitter<number>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      rechargedDistance: 0
    });
  }
}
