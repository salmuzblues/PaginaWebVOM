import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PublicationsComponent } from './publications/publications.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'publications', component: PublicationsComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: 'home'}

];

// ngModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
// export const routedComponents = [HomeComponent, WorkComponent];
