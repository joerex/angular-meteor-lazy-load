import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
    <h1>Angular 4 / Meteor 1.5 / Lazy Loading</h1>
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="['expensive-route']">Expensive Route</a>
    <a [routerLink]="['cheap-route']">Cheap Route</a>
    <router-outlet></router-outlet>
  `,
})

export class App {
  constructor() {}
}
