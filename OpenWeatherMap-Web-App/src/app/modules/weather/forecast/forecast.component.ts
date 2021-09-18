import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { FORECAST_PAGE_DATA } from 'src/app/data/constants/weather/forecast/forecast-page.const';
import { FetchWeatherService } from 'src/app/services/fetch-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  title = FORECAST_PAGE_DATA.TITLE;

  location: any;
  weather: any;
  error: boolean;
  subUrlParams: Subscription | undefined;
  subAPICall: Subscription | undefined;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private fetchWeatherService: FetchWeatherService
    ) {
      this.location = null;
      this.weather = null;
      this.error = false;
     }

  ngOnInit(): void {
    this.subUrlParams = this.activatedRouteService.paramMap.subscribe( params => {
      this.location = params.get("id");
      this.getWeather(this.location);
    });

  }

  ngOnDestroy(): void {
    this.subUrlParams?.unsubscribe();
    this.subAPICall?.unsubscribe();
  }

  getWeather(location: any){
    this.subAPICall = this.fetchWeatherService.getForecast(location).subscribe(
      res => this.weather = res,
      err => this.error = true
    )

  }

}
