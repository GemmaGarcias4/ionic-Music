import { Component, OnChanges, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnChanges, AfterViewInit {

  @Input() audio: {url: string, loop: boolean, title: string};
  srcAudio: {url: string, loop: boolean, title: string};
  playIcon = 'pause';
  audioDuration: number;
  currentPosition: number;
  restTime: string;

  @ViewChild('audioElement', { static: false }) public audioRef: ElementRef;
  private audioHtmlEl: HTMLMediaElement;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => this.readAudio());
  }

  ngOnChanges() {
    if (this.srcAudio && this.audio.url !== this.srcAudio.url) {
      this.audioHtmlEl.setAttribute('src', this.audio.url) ;
      this.audioHtmlEl.setAttribute('loop', stringify(this.audio.loop));
      this.srcAudio = this.audio;
      this.audioHtmlEl.play();
      this.playIcon = 'pause';
    } else {
      this.srcAudio = this.audio;
    }
  }

  readAudio() {
    const audios = this.audioHtmlEl;
    audios.onloadeddata = () => {
      this.audioDuration = Math.floor(audios.duration);
    };
    audios.addEventListener('timeupdate', () => {
      this.currentPosition = Math.floor(this.audioHtmlEl.currentTime);
      this.convertSec(this.audioDuration - this.currentPosition);
    });
  }

  convertSec(seconds: number) {
    const min = Math.floor((seconds / 60 / 60) * 60);
    const sec = Math.floor(((seconds / 60 / 60) * 60 - min) * 60);
    const secD = sec < 10 ? `0${sec}` : sec;
    this.restTime = `${min}:${secD}`;
  }

  playPause() {
    if ( this.playIcon === 'pause' ) {
      this.playIcon = 'play';
      this.audioHtmlEl.pause();
    } else {
      this.playIcon = 'pause';
      this.audioHtmlEl.play();
    }
  }
  public ngAfterViewInit() {
    this.audioHtmlEl = this.audioRef.nativeElement;
  }
}
