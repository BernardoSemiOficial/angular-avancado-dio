import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../shared/components/components.module';
import { SkeletonCardDirective } from '../../shared/directives/skeleton-card.directive';
import { RootFeatureAModule } from '../../shared/templates/root-feature-a/root-feature-a.module';
import { ContentAChildComponent } from './components/content-a-child/content-a-child.component';
import { ContentBFirstChildComponent } from './components/content-b-first-child/content-b-first-child.component';
import { ContentBSecondChildComponent } from './components/content-b-second-child/content-b-second-child.component';
import { ContentAComponent } from './containers/content-a/content-a.component';
import { ContentBComponent } from './containers/content-b/content-b.component';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  declarations: [
    FeatureAComponent,
    SkeletonCardDirective,
    ContentAComponent,
    ContentBComponent,
    ContentAChildComponent,
    ContentBFirstChildComponent,
    ContentBSecondChildComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RootFeatureAModule,
    RouterModule.forChild([
      { path: '', component: FeatureAComponent },
      { path: 'content-a', component: ContentAComponent },
      { path: 'content-b', component: ContentBComponent },
    ]),
  ],
})
export class FeatureAModule {}
