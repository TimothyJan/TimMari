import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MomentsComponent } from './components/moments/moments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'moments', component: MomentsComponent },
  // redirect to `home` if there is no path
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
