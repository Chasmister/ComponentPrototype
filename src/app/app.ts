import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FuiField } from './fui-field/fui-field';
import { FuiInput } from './components/fui-input/fui-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FuiField, FuiInput],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      smallInput: [''],
      mediumInput: ['', Validators.required],
      largeInput: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      noLabel: [''],
      defaultVertical: [''],
      verticalLarge: [''],
      horizontalSmall: [''],
      horizontalLarge: [''],
      disabledField: [{ value: '', disabled: true }],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Form submitted:', this.form.value);
  }

  // Helpers for template readability
  get f() { return this.form.controls; }
}
