import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home.component';
import {BlogPageComponent} from './blog-page/blog-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: '**', redirectTo: 'home'}

];

// ngModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
// export const routedComponents = [HomeComponent, WorkComponent];

