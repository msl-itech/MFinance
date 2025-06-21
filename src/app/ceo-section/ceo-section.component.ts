import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageOptimizerDirective } from '../shared/image-optimizer.directive';

@Component({
  selector: 'app-ceo-section',
  standalone: true,
  imports: [CommonModule, ImageOptimizerDirective],
  templateUrl: './ceo-section.component.html',
  styleUrl: './ceo-section.component.css',
})
export class CeoSectionComponent {}
