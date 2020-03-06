import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  { path: 'tracks', loadChildren: './pages/tracks/tracks.module#TracksPageModule' },
  { path: 'tracks/:id', loadChildren: './pages/track-detail/track-detail.module#TrackDetailPageModule' },
  {
    path: 'track-detail',
    loadChildren: () => import('./pages/track-detail/track-detail.module').then( m => m.TrackDetailPageModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }