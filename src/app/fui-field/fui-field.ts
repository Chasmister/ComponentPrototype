import { Component, Input } from '@angular/core';
import { FuiInput } from '../components/fui-input/fui-input';

@Component({
  selector: 'app-fui-field',
  standalone: true,
  imports: [],
  templateUrl: './fui-field.html',
  styleUrl: './fui-field.scss',
})
export class FuiField {
  @Input() label: string = '';
  @Input() errorMessage: string = '';
  @Input() errorIcon: string = '';
}
