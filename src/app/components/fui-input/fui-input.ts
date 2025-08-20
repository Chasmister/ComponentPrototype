import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fui-input',
  standalone: true,
  templateUrl: './fui-input.html',
  styleUrl: './fui-input.scss',
})
export class FuiInput {
  @Input() placeholder: string = '';
}
