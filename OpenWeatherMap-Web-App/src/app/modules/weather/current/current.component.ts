import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CURRENT_PAGE_DATA } from 'src/app/data/constants/weather/current/current-page.const';
import { FetchWeatherService } from 'src/app/services/fetch-weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnDestroy {

  title = CURRENT_PAGE_DATA.TITLE;

  timestamp: Date;
  location: any;
  weather: any;
  error: boolean;
  subUrlParams: Subscription | undefined;
  subAPICall: Subscription | undefined;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private fetchWeatherService: FetchWeatherService
    ) {
      this.timestamp = new Date();
      this.location = null;
      this.weather = null;
      this.error = false;
     }

  ngOnInit(): void {
    this.subUrlParams = this.activatedRouteService.paramMap.subscribe( params => {
      //console.log(params);
      this.location = params.get("id");
      this.getWeather(this.location);
    });

  }

  ngOnDestroy(): void {
    this.subUrlParams?.unsubscribe();
    this.subAPICall?.unsubscribe();
  }

  getWeather(location: any){
    this.subAPICall = this.fetchWeatherService.getCurrent(location).subscribe(
      res => this.weather = res,
      err => this.error = true
    )

  }



}
