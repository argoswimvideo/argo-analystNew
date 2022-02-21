import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private helperS: HelperService) { }

  ngOnInit(): void {
  }
  openVideoModal() {
    this.helperS.showVideoModal('/assets/video/demo_swim.mp4');
  }
}
