import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstDummyComponent } from './first-dummy/first-dummy.component';
import { NotificationModule } from './notification/notification-module.module';
import { SecondDummyComponent } from './second-dummy/second-dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstDummyComponent,
    SecondDummyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
