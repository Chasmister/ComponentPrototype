import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button';
import { FuiInput } from "./components/fui-input/fui-input";
import { FuiField } from "./fui-field/fui-field";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, FuiInput, FuiField],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('new-component-test');
}
