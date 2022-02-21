import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HelperService } from './analyst/services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  subscription: any;
  constructor(private helperServcie: HelperService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngAfterViewInit(): void {
    this.helperServcie.setModal(this.YNModall)
    this.subscription = this.YNModall.onHide.subscribe(data => {
      let viu = document.getElementById('vidapp') as HTMLVideoElement
      viu.src = ''
    })
  }
  @ViewChild('YNModall') public YNModall!: ModalDirective;
  title = 'ARGO';
}
