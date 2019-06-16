import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HometabPage } from './hometab.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
const routes: Routes = [
  {
    path: '',
    component: HometabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  declarations: [HometabPage]
})
export class HometabPageModule { }
