import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '@shared/controls/validators.service';
import { UserValidatorsService } from '../user-validators.service';

@Component({
  selector: 'stk-register',
  templateUrl: './register.form.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm implements OnInit {
  form: FormGroup;
  private emailValidators = [Validators.required, Validators.email];
  private emailAsyncValidators = [this.userValidators.emailFreeValidator()];
  private emailOptions: FormControlOptions = {
    updateOn: 'blur',
    validators: this.emailValidators,
    asyncValidators: this.emailAsyncValidators,
  };
  private passwordValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    this.validatorsService.customPasswordValidation,
  ];

  private formValidators = [this.validatorsService.matchValue('password', 'passwordConfirmation')];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userValidators: UserValidatorsService,
    private readonly validatorsService: ValidatorsService
  ) {
    this.form = this.formBuilder.group(
      {
        email: new FormControl('a@b.c', this.emailOptions),
        password: new FormControl('', this.passwordValidators),
        passwordConfirmation: new FormControl('', this.passwordValidators),
      },
      {
        validators: this.formValidators,
      }
    );
  }

  ngOnInit(): void {}
}
