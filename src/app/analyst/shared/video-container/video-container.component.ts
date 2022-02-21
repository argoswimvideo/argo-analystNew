import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {

  constructor(private helperS: HelperService) { }

  ngOnInit(): void {
  }
  openVideoModal() {
    this.helperS.showVideoModal('/assets/video/demo_swim.mp4');
  }
}
