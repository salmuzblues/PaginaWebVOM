import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '**', redirectTo: 'home'}

];

// ngModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
// export const routedComponents = [HomeComponent, WorkComponent];
