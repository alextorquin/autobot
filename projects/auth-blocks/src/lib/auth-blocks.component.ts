import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'lib-auth-blocks',
  templateUrl: './auth-blocks.component.html',
  styles: []
})
export class AuthBlocksComponent implements OnInit {
  @Input()
  public form: FormGroup;
  @Input()
  public isNewAccount = false;
  @Output()
  public login = new EventEmitter();
  @Output()
  public register = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  public ngOnInit() {}

  public onNoAccount() {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            CustomValidators.PasswordMustHaveNumbers
          ]
        ],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      },
      {
        validator: CustomValidators.MatchPassword
      }
    );
    this.isNewAccount = true;
  }

  public onAccount() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), CustomValidators.PasswordMustHaveNumbers]
      ]
    });
    this.isNewAccount = false;
  }
}
