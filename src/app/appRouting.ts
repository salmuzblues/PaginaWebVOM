import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogPost1Component} from './blog-post/blog-post1/blog-post1.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'post1', component: BlogPost1Component},
  {path: '**', redirectTo: 'home'}

];

// ngModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
// export const routedComponents = [HomeComponent, WorkComponent];

