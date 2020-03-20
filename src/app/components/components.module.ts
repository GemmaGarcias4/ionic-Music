import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AudioPlayerComponent } from './audio-player/audio-player.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AudioPlayerComponent
  ],
  exports: [
    HeaderComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
