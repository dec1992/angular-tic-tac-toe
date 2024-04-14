import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgIf],
  template: `
   <button class="button is-dark is-fullwidth" *ngIf="!value">{{ value }}</button>
   <button class="button is-success is-fullwidth" status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button class="button is-info is-fullwidth" status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: `
  button {
    width: 100%;
    height: 100%;
    font-size: 40px;
  }
`
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | '' = ''
}
