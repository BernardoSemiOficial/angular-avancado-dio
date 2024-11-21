import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RootFeatureAComponent } from './root-feature-a.component';

@NgModule({
  declarations: [RootFeatureAComponent],
  imports: [CommonModule],
  exports: [RootFeatureAComponent],
})
export class RootFeatureAModule {}
