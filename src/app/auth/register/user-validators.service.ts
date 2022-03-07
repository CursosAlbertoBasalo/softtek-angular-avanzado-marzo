import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { User } from '@data/models/user.interface';
import { UsersService } from '@data/services/users.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserValidatorsService {
  constructor(private readonly users: UsersService) {}

  emailFreeValidator(): AsyncValidatorFn {
    const validatorFunction: AsyncValidatorFn = (control: AbstractControl) => {
      return this.users
        .getByEmail$(control.value)
        .pipe(map((response: User[]) => (response.length === 0 ? null : { emailTaken: true })));
    };

    return validatorFunction;
  }
}
