import {Component,Input,forwardRef} from '@angular/core';
import { NgClass } from '@angular/common';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-fui-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './fui-input.html',
  styleUrl: './fui-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FuiInput),
      multi: true,
    },
  ],
})
export class FuiInput implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;

  value: string = '';

  private onChange: (val: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: any): void {
    this.value = val || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  handleBlur() {
    this.onTouched();
  }
}
