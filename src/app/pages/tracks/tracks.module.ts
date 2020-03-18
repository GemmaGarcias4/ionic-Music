import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TracksPage } from './tracks.page';
import { TracksService } from '../../services/tracks.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TracksPage }]),
    ComponentsModule
  ],
  declarations: [TracksPage],
  providers: [TracksService]
})

export class TracksPageModule {

  constructor(private tracksService: TracksService) { }
}
