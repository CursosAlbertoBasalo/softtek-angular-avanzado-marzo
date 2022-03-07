import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'stk-register',
  templateUrl: './register.form.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm implements OnInit {
  form: FormGroup;
  private emailValidators = [Validators.required, Validators.email];
  private passwordValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    this.customPasswordValidation,
  ];

  private formValidators = [this.matchValue('password', 'passwordConfirmation')];

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        email: new FormControl('a@b.c', this.emailValidators),
        password: new FormControl('', this.passwordValidators),
        passwordConfirmation: new FormControl('', this.passwordValidators),
      },
      {
        validators: this.formValidators,
      }
    );
  }

  ngOnInit(): void {}

  private customPasswordValidation(control: AbstractControl): ValidationErrors | null {
    let errors: ValidationErrors | null = null;
    const value = control.value as string;
    if (value && value.startsWith('1')) {
      errors = { startsWithOne: true };
    }
    return errors;
  }

  private matchValue(firstControlName: string, secondControlName: string): ValidatorFn {
    let validatorFunction: ValidatorFn;

    validatorFunction = (form: AbstractControl) => {
      let errors: ValidationErrors | null = null;
      const firstValue = form.get(firstControlName)?.value;
      const secondValue = form.get(secondControlName)?.value;
      if (firstValue !== secondValue) {
        errors = { noMatch: true };
      }
      return errors;
    };

    return validatorFunction;
  }
}
