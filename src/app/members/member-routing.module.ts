import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tracks', loadChildren: '../pages/tracks/tracks.module#TracksPageModule' },
  { path: 'tracks/:id', loadChildren: '../pages/track-detail/track-detail.module#TrackDetailPageModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
