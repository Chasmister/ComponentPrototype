import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-fui-field',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './fui-field.html',
  styleUrls: ['./fui-field.scss'],
})
export class FuiField {
  @Input() label: string = '';
  @Input() horizontal: boolean = false;
  @Input() noLabel: boolean = false;
  @Input() required: boolean = false;

  // label size/orientation
  @Input() labelSize: 'default' | 'vertical-large' | 'horizontal-small' | 'horizontal-large' = 'default';

  @Input() hint: string = '';
  @Input() errorMessage: string = '';
  @Input() successMessage: string = '';
  @Input() warningMessage: string = '';

  @Input() errorIcon: string = '';
  @Input() successIcon: string = '';
  @Input() warningIcon: string = '';
}
