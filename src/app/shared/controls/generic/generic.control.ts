import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'stk-generic',
  templateUrl: './generic.control.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericControl),
      multi: true,
    },
  ],
})
export class GenericControl implements OnInit, ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'password' | 'text' = 'text';

  private _formControlName!: string;
  @Input() set formControlName(f: string) {
    this._formControlName = f;
    this.form = new FormGroup({});
    this.form.addControl(f, new FormControl());
  }
  get formControlName(): string {
    return this._formControlName;
  }

  @Input() set validators(v: any[]) {
    this.getControl().setValidators(v);
  }

  form!: FormGroup;

  constructor() {}

  writeValue(val: any): void {
    val && this.getControl().setValue(val, { emitEvent: false });
  }
  value: any;
  registerOnChange(changeCallback: any): void {
    this.getControl().valueChanges.subscribe(changeCallback);
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
