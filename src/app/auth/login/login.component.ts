import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'stk-login',
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public passwordValidators = [Validators.required, Validators.minLength(4)];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['a@b.c'],
      password: ['123', this.passwordValidators],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log('Login');
    console.log(this.form.value);
    const realValue = {
      email: this.form.value.email.email || this.form.value.email,
      password: this.form.value.password,
    };
    console.log(realValue);
    //this.navigateBack();
  }
  private navigateBack() {
    const homeUrl = '/';
    const returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.router.navigateByUrl(returnUrl || homeUrl);
  }
}
