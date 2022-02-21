import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './components/completed/completed.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewRatingsComponent } from './components/review-ratings/review-ratings.component';
import { UploadWorkComponent } from './components/upload-work/upload-work.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [{
  path: '', component: MainComponent, children: [{
    path: '', component: DashboardComponent
  }, {
    path: 'work', component: WorkComponent
  }, {
    path: 'complete', component: CompletedComponent
  }, {
    path: 'upload', component: UploadWorkComponent
  }, {
    path: 'reviews', component: ReviewRatingsComponent
  }, {
    path: 'profile', component: ProfileComponent
  }, {
    path: 'edit-profile', component: EditProfileComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRoutingModule { }
