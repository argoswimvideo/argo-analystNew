import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-upload-work',
  templateUrl: './upload-work.component.html',
  styleUrls: ['./upload-work.component.scss']
})
export class UploadWorkComponent implements OnInit {
  control: any = 1
  constructor(private helperS: HelperService) { }

  ngOnInit(): void {
  }
  handleFile(event: any) {
    this.control = 2
    var URL = window.URL || window.webkitURL;
    setTimeout(() => {
      let videoEle = document.getElementById('vid1') as HTMLVideoElement
      let file = event.target.files[0]
      console.log(file)
      var url = URL.createObjectURL(file);
      videoEle.src = url
    }, 500);
  }
  openVideoModal() {
    this.helperS.showVideoModal('/assets/video/demo_swim.mp4');
  }

}
