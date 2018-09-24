import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-battery-recharger',
  templateUrl: './battery-recharger.component.html',
  styles: []
})
export class BatteryRechargerComponent implements OnInit {
  @Output()
  public recharge = new EventEmitter<number>();
  @Input()
  public totalBattery = 100;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      rechargedDistance: [0, [Validators.required, Validators.min(1), Validators.max(this.totalBattery)]]
    });
  }

  public getErrors(controlName: string): any {
    const control = this.form.controls[controlName];
    return control.errors;
  }

  public mustShowError(controlName: string) {
    const control = this.form.controls[controlName];
    if (control.invalid && (control.dirty || control.touched)) {
      return true;
    } else {
      return false;
    }
  }

  public hasError(controlName: string, errorCode: string): any {
    const control = this.form.controls[controlName];
    const error = control.getError(errorCode);
    if (error) {
      return true;
    } else {
      return false;
    }
  }
}
