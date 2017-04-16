import {Route, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {Home} from "../home/home.component";
import {CheapModule} from "../cheap/cheap.module";

declare global {
  interface NodeModule {
    dynamicImport(path: string): any;
  }
}

export const appRoutes: Route[] = [
  { path: '', component: Home },
  {
    path: 'cheap-route',
    loadChildren: () => CheapModule
  },
  {
    path: 'expensive-route',
    loadChildren: () => module.dynamicImport('../expensive/expensive.module').then(m => m.default)
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