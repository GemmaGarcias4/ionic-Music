import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'playlists', loadChildren: '../pages/playlists/playlists.module#PlaylistsPageModule' },
  { path: 'playlists/:id', loadChildren: '../pages/playlist-detail/playlist-detail.module#PlaylistDetailPageModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
