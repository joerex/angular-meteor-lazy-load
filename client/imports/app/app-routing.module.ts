import {Route, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {Home} from "../home/home.component";
import {CheapModule} from "../cheap/cheap.module";

export const appRoutes: Route[] = [
  { path: '', component: Home },
  {
    path: 'cheap-route',
    loadChildren: () => CheapModule
  },
  {
    path: 'expensive-route',
    loadChildren: () => new Promise(resolve => module.dynamicImport('../expensive/expensive.module').then(m => resolve(m.ExpensiveModule)))
    //loadChildren: () => module.dynamicImport('../expensive/expensive.module')
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}