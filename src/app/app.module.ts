import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';
import { HomePageViewComponent } from './home-page-view/home-page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreDeNavigationComponent,
    ErreurPageComponent,
    HomePageViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
