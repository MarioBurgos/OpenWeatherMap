import { Component, OnInit } from '@angular/core';
import { DASHBOARD_PAGE_DATA } from 'src/app/data/constants/home/dashboard-page.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = DASHBOARD_PAGE_DATA.TITLE;
  introP1 = DASHBOARD_PAGE_DATA.INTRO_P1;
  introP2 = DASHBOARD_PAGE_DATA.INTRO_P2;
  introP3 = DASHBOARD_PAGE_DATA.INTRO_P3;

  showMore: boolean;

  constructor() {
    this.showMore = false;
   }

  ngOnInit(): void {
  }

  toggleShowMore(){
    this.showMore = !this.showMore;
  }
}
