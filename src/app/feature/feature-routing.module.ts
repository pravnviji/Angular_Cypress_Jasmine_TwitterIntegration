import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './twitter/component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    outlet: 'twitter-main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
