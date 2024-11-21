import { Component } from '@angular/core';
import { ColorSkeletonCardDirective } from '../../shared/directives/skeleton-card.directive';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.scss',
})
export class FeatureAComponent {
  ColorSkeletonCardDirective = ColorSkeletonCardDirective;
}
