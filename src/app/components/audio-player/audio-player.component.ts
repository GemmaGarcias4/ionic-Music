import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnChanges {

  @Input() audio: {url: string, loop: boolean, title: string};
  srcAudio: {url: string, loop: boolean, autoplay: boolean, title: string};

  constructor() { }

  ngOnChanges() {
    this.srcAudio = {
      url: this.audio.url,
      loop: this.audio.loop,
      autoplay: true,
      title: this.audio.title
    };
  }

}
