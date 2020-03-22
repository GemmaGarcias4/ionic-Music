import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnChanges {

  @Input() audio: string;
  srcAudio: {url: string, autoplay: boolean};

  constructor() { }

  ngOnChanges() {
    this.srcAudio = {url: this.audio, autoplay: true};
  }

}
