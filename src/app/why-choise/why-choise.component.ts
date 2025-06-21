import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageOptimizerDirective } from '../shared/image-optimizer.directive';
import { OptimizedImageComponent } from '../shared/optimized-image.component';

@Component({
  selector: 'app-why-choise',
  standalone: true,
  imports: [CommonModule, OptimizedImageComponent, ImageOptimizerDirective],
  templateUrl: './why-choise.component.html',
  styleUrl: './why-choise.component.css',
})
export class WhyChoiseComponent {}
