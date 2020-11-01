import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
