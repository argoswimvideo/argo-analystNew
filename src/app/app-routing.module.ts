import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'analyst', loadChildren: () => import('./analyst/analyst.module').then(m => m.AnalystModule)
  },
  {
    path: '', loadChildren: () => import('./analyst/auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
