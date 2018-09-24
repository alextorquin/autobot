import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormToolsService } from '../../shared/form-tools.service';

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

  constructor(private fb: FormBuilder, private formTools: FormToolsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      rechargedDistance: [0, [Validators.required, Validators.min(1), Validators.max(this.totalBattery)]]
    });
  }

  public getErrors(controlName: string): any {
    return this.formTools.getErrors(this.form, controlName);
  }

  public mustShowError(controlName: string) {
    return this.formTools.mustShowError(this.form, controlName);
  }

  public hasError(controlName: string, errorCode: string): any {
    return this.formTools.hasError(this.form, controlName, errorCode);
  }
}
