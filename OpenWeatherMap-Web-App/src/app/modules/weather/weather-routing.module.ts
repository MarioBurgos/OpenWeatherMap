import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: 'current/:id', component: CurrentComponent, pathMatch: 'full'
  },
  {
    path: 'forecast/:id', component: ForecastComponent, pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
