import {NgModule} from '@angular/core';
import {App} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "../home/home.module";

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
  ],
  declarations: [
    App,
  ],
  bootstrap: [App]
})

export class AppModule {}