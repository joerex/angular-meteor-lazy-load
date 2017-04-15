import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CheapComponent} from "./cheap.component";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CheapComponent}])
  ],
  declarations: [
    CheapComponent
  ],
  export: [CheapComponent]
})

export class CheapModule {}