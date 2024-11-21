import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootFeatureBModule } from '../../shared/templates/root-feature-b/root-feature-b.module';
import { FeatureBComponent } from './feature-b.component';

@NgModule({
  declarations: [FeatureBComponent],
  imports: [
    CommonModule,
    RootFeatureBModule,
    RouterModule.forChild([{ path: '', component: FeatureBComponent }]),
  ],
})
export class FeatureBModule {}
