import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-ratings',
  templateUrl: './review-ratings.component.html',
  styleUrls: ['./review-ratings.component.scss']
})
export class ReviewRatingsComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    const focused = document.querySelector('.focus')

    //focused?.scrollIntoView({ behavior: 'smooth' })
  }
  rate(starindex: any, index: number) {
    (document.getElementById('star' + starindex + index) as any).checked = true
  }
  ngOnInit(): void {
  }

}
