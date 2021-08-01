import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P404Component } from './pages/p404/p404.component';

const routes: Routes = [
  { path: '404', component: P404Component },
  { path: '404.html', component: P404Component },
  { path: '', redirectTo: '/docs/getting-started/readme', pathMatch: 'full' },
  { path: '**', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
