import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  requestq: any
  constructor(private helperS: HelperService) { }
  ngAfterViewInit(): void {
    var request = new XMLHttpRequest();
    request.open('GET', '/assets/video/demo_swim.mp4', true);
    request.responseType = 'blob';
    request.onload = function () {
      var reader = new FileReader();
      reader.readAsDataURL(request.response);
      reader.onload = function (e: any) {
        console.log('DataURL:', e.target.result);
      };
    };
    //request.send();
    this.requestq = request
    //this.requestq.send()
    // let viu = document.getElementById('vidd0') as HTMLVideoElement
    // viu.src = '/assets/video/mov_bbb.mp4';
  }

  ngOnInit(): void {
    var URL = window.URL || window.webkitURL;
    var file = new Blob(
      ["assets/video/demo_swim.mp4"],
      { "type": "video\/mp4" });
    var value = URL.createObjectURL(file);

  }
  openVideoModal() {
    this.helperS.showVideoModal('/assets/video/demo_swim.mp4');
  }

}
