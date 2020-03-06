import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TracksPage } from './tracks.page';
import { TracksService } from '../../services/tracks.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TracksPage }])
  ],
  declarations: [TracksPage],
  providers: [TracksService]
})

export class TracksPageModule {

  constructor(private tracksService: TracksService) { }

}