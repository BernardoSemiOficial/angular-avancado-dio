import { Component } from '@angular/core';
import { ColorSkeletonCardDirective } from '../../../../shared/directives/skeleton-card.directive';

@Component({
  selector: 'app-content-a',
  templateUrl: './content-a.component.html',
  styleUrl: './content-a.component.scss',
})
export class ContentAComponent {
  ColorSkeletonCardDirective = ColorSkeletonCardDirective;
}
