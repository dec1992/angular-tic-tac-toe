import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgIf],
  template: `
   <button>{{ value }}</button>
  `,
  styles: `
`
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | '' = ''
}
