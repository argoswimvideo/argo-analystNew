import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoContainerComponent } from './video-container/video-container.component';



@NgModule({
  declarations: [
    VideoContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoContainerComponent
  ]
})
export class SharedModule { }
