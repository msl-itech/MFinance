import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h1-title',
  template: ` <h1 [class]="customClass">{{ title }}</h1> `,
  styles: [
    `
      h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class H1TitleComponent {
  @Input() title: string = '';
  @Input() customClass: string = '';
}
