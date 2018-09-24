import { Injectable } from '@angular/core';

@Injectable()
export class FormToolsService {
  constructor() {}
  public getErrors(form, controlName: string): any {
    const control = form.controls[controlName];
    return control.errors;
  }

  public mustShowError(form, controlName: string) {
    const control = form.controls[controlName];
    if (control.invalid && (control.dirty || control.touched)) {
      return true;
    } else {
      return false;
    }
  }

  public hasError(form, controlName: string, errorCode: string): any {
    const control = form.controls[controlName];
    const error = control.getError(errorCode);
    if (error) {
      return true;
    } else {
      return false;
    }
  }
}
