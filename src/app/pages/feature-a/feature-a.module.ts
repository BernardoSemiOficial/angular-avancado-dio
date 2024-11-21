import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../shared/components/components.module';
import { SkeletonCardDirective } from '../../shared/directives/skeleton-card.directive';
import { RootFeatureAModule } from '../../shared/templates/root-feature-a/root-feature-a.module';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  declarations: [FeatureAComponent, SkeletonCardDirective],
  imports: [
    CommonModule,
    ComponentsModule,
    RootFeatureAModule,
    RouterModule.forChild([{ path: '', component: FeatureAComponent }]),
  ],
})
export class FeatureAModule {}
