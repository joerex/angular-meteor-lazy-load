import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ExpensiveComponent} from "./expensive.component";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ExpensiveComponent}])
  ],
  declarations: [
    ExpensiveComponent
  ],
  export: [ExpensiveComponent]
})

export class ExpensiveModule {}