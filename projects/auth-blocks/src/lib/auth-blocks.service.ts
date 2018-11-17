import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthBlocksService {
  constructor() {}
  public getErrors(form: FormGroup, controlName: string): any {
    const control = this.getControl(form, controlName);
    return control.errors;
  }

  public mustShowError(form: FormGroup, controlName: string) {
    const control = this.getControl(form, controlName);
    if (control.invalid && (control.dirty || control.touched)) {
      return true;
    } else {
      return false;
    }
  }

  public hasError(form: FormGroup, controlName: string, errorCode: string): any {
    const control = this.getControl(form, controlName);
    const error = control.getError(errorCode);
    if (error) {
      return true;
    } else {
      return false;
    }
  }
  private getControl = (form: FormGroup, controlName: string): AbstractControl =>
    form.controls[controlName];
}
