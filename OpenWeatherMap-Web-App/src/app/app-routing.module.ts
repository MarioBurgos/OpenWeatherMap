import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/owm/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/owm/home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
