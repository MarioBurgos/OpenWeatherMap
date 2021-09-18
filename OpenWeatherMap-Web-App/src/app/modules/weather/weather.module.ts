import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { SearchComponent } from './search/search.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SearchComponent,
    CurrentComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
