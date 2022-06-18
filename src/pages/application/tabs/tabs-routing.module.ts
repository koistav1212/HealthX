import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('../discover/discover.module').then( m => m.DiscoverPageModule)
          }
        ]
      },
      {
        path: 'community',
        children: [
          {
            path: '',
            loadChildren: () => import('../community/community.module').then( m => m.CommunityPageModule)
          }
        ]
      },
      {
        path: 'therapists',
        children: [
          {
            path: '',
            loadChildren: () => import('../therapists/therapists.module').then( m => m.TherapistsPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
