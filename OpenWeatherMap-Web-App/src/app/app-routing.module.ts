import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('./modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'weather',
        loadChildren: ()=> import('./modules/weather/weather.module').then(m=>m.WeatherModule)
      },
      {
        path: 'about',
        loadChildren: ()=> import('./modules/about/about.module').then(m=>m.AboutModule)
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
