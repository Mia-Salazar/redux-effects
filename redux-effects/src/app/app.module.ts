import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { effect } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    UsersModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effect)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
