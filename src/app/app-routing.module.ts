import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';

const routes: Routes = [
  {
    path: '**',
    component: ErreurPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
