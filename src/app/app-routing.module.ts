import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  {
    path: 'login',
    loadChildren: () => import("../pages/authentication/login/login.module").then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../pages/authentication/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import("../pages/application/tabs/tabs.module").then( m => m.TabsPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('../pages/application/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('../pages/application/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/application/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-post-modal',
    loadChildren: () => import('../pages/application/create-post-modal/create-post-modal.module').then( m => m.CreatePostModalPageModule)
  },
  {
    path: 'features',
    loadChildren: () => import('../pages/application/features/features.module').then( m => m.FeaturesPageModule)
  },
  {
    path: 'getstarted',
    loadChildren: () => import('../pages/authentication/getstarted/getstarted.module').then( m => m.GetstartedPageModule)
  },
  {
    path: 'blog-view',
    loadChildren: () => import('../pages/application/blog-view/blog-view.module').then( m => m.BlogViewPageModule)
  },
  {
    path: 'suggestions',
    loadChildren: () => import('../pages/application/suggestions/suggestions.module').then( m => m.SuggestionsPageModule)
  },
  {
    path: 'testimonial',
    loadChildren: () => import('../pages/application/testimonial/testimonial.module').then( m => m.TestimonialPageModule)
  },
  {
    path: 'fact-page',
    loadChildren: () => import('../pages/application/fact-page/fact-page.module').then( m => m.FactPagePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('../pages/application/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'viewall',
    loadChildren: () => import('../pages/application/viewall/viewall.module').then( m => m.ViewallPageModule)
  },
  {
    path: 'videoplayer',
    loadChildren: () => import('../pages/application/videoplayer/videoplayer.module').then( m => m.VideoplayerPageModule)
  },
  {
    path: 'audioplayer',
    loadChildren: () => import('../pages/application/audioplayer/audioplayer.module').then( m => m.AudioplayerPageModule)
  },
  {
    path: 'mood-detail',
    loadChildren: () => import('../pages/application/mood-detail/mood-detail.module').then( m => m.MoodDetailPageModule)
  },
  {
    path: 'moodtracker',
    loadChildren: () => import('../pages/application/moodtracker/moodtracker.module').then( m => m.MoodtrackerPageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('../pages/application/plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('../pages/application/review/review.module').then( m => m.ReviewPageModule)
  },












 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
