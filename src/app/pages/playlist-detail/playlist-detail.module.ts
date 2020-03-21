import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardComponent } from './components/board/board.component';

import { PlaylistDetailPage } from './playlist-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TrackComponent } from './components/track/track.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PlaylistDetailPage }]),
    ComponentsModule
  ],
  declarations: [PlaylistDetailPage, BoardComponent, TrackComponent]
})
export class PlaylistDetailPageModule {}
