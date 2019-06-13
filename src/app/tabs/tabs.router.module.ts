import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { HeaderComponent } from '../navigation/header/header/header.component';

const routes: Routes = [
  {
    path: 'header',
    redirectTo: '/header',
    pathMatch: 'full'
  }, 
  {    
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },      
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },     
      {
        path: 'hometab',
        children: [
          {
            path: '',
            loadChildren: '../hometab/hometab.module#HometabPageModule'
          }
        ]
      },     
      {
        path: '',
        redirectTo: '/tabs/tab1', // default
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
 
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
