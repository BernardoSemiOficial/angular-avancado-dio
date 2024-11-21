import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-a',
    loadChildren: () =>
      import('./pages/feature-a/feature-a.module').then(
        (m) => m.FeatureAModule
      ),
  },
  {
    path: 'feature-b',

    loadChildren: () =>
      import('./pages/feature-b/feature-b.module').then(
        (m) => m.FeatureBModule
      ),
  },
  { path: '', redirectTo: '/feature-a', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
