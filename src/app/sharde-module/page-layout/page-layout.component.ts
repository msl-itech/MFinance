import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="page-container">
      <app-h1-title
        *ngIf="pageTitle"
        [title]="pageTitle"
        [customClass]="titleVisible ? '' : 'visually-hidden'"
      ></app-h1-title>
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class PageLayoutComponent {
  @Input() pageTitle: string = '';
  @Input() titleVisible: boolean = false;
}
