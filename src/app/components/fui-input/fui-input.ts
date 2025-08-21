import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-fui-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './fui-input.html',
  styleUrl: './fui-input.scss',
})
export class FuiInput {
  @Input() placeholder: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;
}
