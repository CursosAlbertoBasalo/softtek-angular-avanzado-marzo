import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'stk-template',
  templateUrl: './template.control.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateControl),
      multi: true,
    },
  ],
})
export class TemplateControl implements OnInit, ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'password' | 'text' = 'text';
  @Input() formControlName!: string;
  @Input() form!: FormGroup;

  constructor() {}

  writeValue(val: any): void {
    this.value = val;
  }
  value: any;
  registerOnChange(changeCallback: any): void {
    this.changedCallback = changeCallback;
  }
  changedCallback!: (value: any) => {};
  registerOnTouched(touchedCallback: any): void {
    this.touchedCallback = touchedCallback;
  }
  touchedCallback!: () => {};

  ngOnInit(): void {}

  onChange(event: any) {
    this.value = event.target.value;
    this.changedCallback(this.value);
    this.touchedCallback();
  }

  getControl(): AbstractControl {
    return this.form.controls[this.formControlName];
  }

  isInvalid(): boolean {
    return this.getControl().invalid;
  }
  mustShowError(): boolean {
    const control = this.getControl();
    return control.invalid && (control.dirty || control.touched);
  }
  getErrorMessage(): string {
    const control = this.getControl();
    return JSON.stringify(control.errors);
  }
}
