import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
const routes :Routes=[
  {
    path:'',
    component:MenuPage,
    children:[
      {
        path:'tabs',
        loadChildren:() => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      }, {
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
        path: 'features',
        children: [
          {
            path: '',
            loadChildren: () => import('../features/features.module').then( m => m.FeaturesPageModule)
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
      {
        path: 'breathe',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/breathe/breathe.module').then( m => m.BreathePageModule)
          }
        ]
      },
      {
        path: 'meditate',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/meditate/meditate.module').then( m => m.MeditatePageModule)
          }
        ]
      },
      
      {
        path: 'medicines',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/medicines/medicines.module').then( m => m.MedicinesPageModule)
          }
        ]
      }, {
        path: 'viewall',
        children: [
          {
            path: '',
            loadChildren: () => import('../viewall/viewall-routing.module').then(m=>m.ViewallPageRoutingModule)
          }
        ]
      },
      {
        path: 'moodDetails',
        children: [
          {
            path: '',
            loadChildren: () => import('../mood-detail/mood-detail-routing.module').then( m => m.MoodDetailPageRoutingModule)
          }
        ]
      },
      {
        path: 'moodTracker',
        children: [
          {
            path: '',
            loadChildren: () => import('../moodtracker/moodtracker-routing.module').then( m => m.MoodtrackerPageRoutingModule)
          }
        ]
      },
      {
        path: 'plans',
        children: [
          {
            path: '',
            loadChildren: () => import('../plans/plans-routing.module').then( m => m.PlansPageRoutingModule)
          }
        ]
      }, 
      {
        path: 'review',
        children: [
          {
            path: '',
            loadChildren: () => import('../review/review-routing.module').then( m => m.ReviewPageRoutingModule)
          }
        ]
      },
      {
        path: 'videoplayer',
        children: [
          {
            path: '',
            loadChildren: () => import('../videoplayer/videoplayer-routing.module').then( m => m.VideoplayerPageRoutingModule)
          }
        ]
      },
      {
        path: 'audioplayer',
        children: [
          {
            path: '',
            loadChildren: () => import('../audioplayer/audioplayer-routing.module').then( m => m.AudioplayerPageRoutingModule)
          }
        ]
      },
       {
        path: 'sleep',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/sleep/sleep.module').then( m => m.SleepPageModule)
          }
        ]
      },
      {
        path: 'userprofile',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-profile/user-profile-routing.module').then( m => m.UserProfilePageRoutingModule)
          }
        ]
      },
      {
        path: 'sounds',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/sounds/sounds.module').then( m => m.SoundsPageModule)
          }
        ]
      },
      {
        path: 'vision',
        children: [
          {
            path: '',
            loadChildren: () => import('../allfeatures/vision/vision.module').then( m => m.VisionPageModule)
          }
        ]
      },
      {
        path: 'blog-view',
        children: [
          {
            path: '',
            loadChildren: () => import('../blog-view/blog-view-routing.module').then( m => m.BlogViewPageRoutingModule)
          }
        ]
      },
      {
        path: 'fact-page',
        children: [
          {
            path: '',
            loadChildren: () => import('../fact-page/fact-page-routing.module').then( m => m.FactPagePageRoutingModule)
          }
        ]
      },
      {
        path: 'suggestions',
        children: [
          {
            path: '',
            loadChildren: () => import('../suggestions/suggestions-routing.module').then( m => m.SuggestionsPageRoutingModule)
          }
        ]
      },
      {
        path: 'testimonials',
        children: [
          {
            path: '',
            loadChildren: () => import('../testimonial/testimonial-routing.module').then( m => m.TestimonialPageRoutingModule)
          }
        ]
      },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
