import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsPage } from './playlists.page';
import { PlaylistsService } from '../../services/playlists.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PlaylistsPage }]),
    ComponentsModule
  ],
  declarations: [PlaylistsPage],
  providers: [PlaylistsService]
})

export class PlaylistsPageModule {

  constructor(private playlistsService: PlaylistsService) { }
}
