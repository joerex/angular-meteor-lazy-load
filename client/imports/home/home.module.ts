import {NgModule} from '@angular/core';
import {Home} from "./home.component";

@NgModule({
  declarations: [
    Home
  ],
  exports: [Home]
})

export class HomeModule {}