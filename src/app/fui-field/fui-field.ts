import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

type MessageType = 'fw-error' | 'fw-success' | 'fw-warning';
interface FieldMessage {
  type: MessageType;
  text: string;
  icon?: string;
}

@Component({
  selector: 'app-fui-field',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './fui-field.html',
  styleUrls: ['./fui-field.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuiField {
  @Input() label = '';
  @Input() horizontal = false;
  @Input() noLabel = false;
  @Input() required = false;

  @Input() labelSize: 'default' | 'vertical-large' | 'horizontal-small' | 'horizontal-large' = 'default';

  @Input() hint = '';

  // New unified API
  @Input() message?: FieldMessage;

  // Legacy API (still supported)
  @Input() errorMessage = '';
  @Input() successMessage = '';
  @Input() warningMessage = '';

  @Input() errorIcon = '';
  @Input() successIcon = '';
  @Input() warningIcon = '';

  get labelClass() {
    return {
      'fw-vertical-large': this.labelSize === 'vertical-large',
      'fw-horizontal-small': this.labelSize === 'horizontal-small',
      'fw-horizontal-large': this.labelSize === 'horizontal-large',
      'fw-horizontal': this.labelSize === 'default' && this.horizontal,
    };
  }
}
