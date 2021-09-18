import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SEARCH_PAGE_DATA } from 'src/app/data/constants/weather/search/search-page.const';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title = SEARCH_PAGE_DATA.TITLE;

  location: string ="";

  constructor() { }

  ngOnInit(): void {

  }
}
