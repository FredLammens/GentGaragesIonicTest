/* eslint-disable max-len */
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,EffectsModule.forRoot([]),  StoreModule.forRoot({ router: routerReducer }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
