import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <div>
    <a href='#' [routerLink]="['']">Home</a>
    <a href='#' [routerLink]="['about']">About</a>
  `
})
export class AppComponent {
  title = 'angularfire-doc';
}
