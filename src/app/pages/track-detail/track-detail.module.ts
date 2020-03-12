import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardComponent } from './board/board.component';

import { TrackDetailPage } from './track-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TrackDetailPage }])
  ],
  declarations: [TrackDetailPage, BoardComponent]
})
export class TrackDetailPageModule {}
