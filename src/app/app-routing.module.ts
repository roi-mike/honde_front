import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageViewComponent } from './home-page-view/home-page-view.component';
import { LoginPageViewComponent } from './login-page-view/login-page-view.component';
import { RegisterPageViewComponent } from './register-page-view/register-page-view.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';
import { MotDePassePerduViewComponent } from './mot-de-passe-perdu-view/mot-de-passe-perdu-view.component';

const routes: Routes = [
{
  path: '',
  component : HomePageViewComponent,
},
{
  path: 'accounts/login',
  component : LoginPageViewComponent,
},
{
  path: 'accounts/emailsignup',
  component: RegisterPageViewComponent,
},
{
  path: 'accounts/password/reset',
  component : MotDePassePerduViewComponent,
},
{
  path: '**',
  component : ErreurPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
