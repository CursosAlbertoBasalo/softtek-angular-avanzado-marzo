import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'stk-email',
  templateUrl: './email.control.html',
  styles: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EmailControl), multi: true },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailControl implements OnInit, ControlValueAccessor {
  @Input() formControlName!: string;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {}
  writeValue(value: any): void {
    console.log('writeValue', value);
    value && this.form.setValue({ email: value }, { emitEvent: false });
  }
  registerOnChange(changeCallback: any): void {
    this.form.valueChanges.subscribe(changeCallback);
  }
  touchedCallback!: () => {};
  registerOnTouched(touchedCallback: any): void {
    this.touchedCallback = touchedCallback;
  }

  ngOnInit(): void {}
}
