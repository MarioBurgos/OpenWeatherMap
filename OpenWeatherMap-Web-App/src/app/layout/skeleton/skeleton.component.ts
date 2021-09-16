import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements AfterViewInit {

  public loaderImg = 'assets/img/loader.gif'
  public isLoading = true;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    })
  }



}
