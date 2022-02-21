import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalystRoutingModule } from './analyst-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { WorkComponent } from './components/work/work.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompletedComponent } from './components/completed/completed.component';
import { UploadWorkComponent } from './components/upload-work/upload-work.component';
import { ReviewRatingsComponent } from './components/review-ratings/review-ratings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    WorkComponent,
    CompletedComponent,
    UploadWorkComponent,
    ReviewRatingsComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    AnalystRoutingModule,
    ModalModule.forRoot()
  ]
})
export class AnalystModule { }
