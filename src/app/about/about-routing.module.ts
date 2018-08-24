import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    // children: [
    //   {
    //     path: 'links',
    //     component: LinksComponent
    //   },
    //   {
    //     path: 'info',
    //     component: InfoComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
