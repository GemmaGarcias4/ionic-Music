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
  srcAudio: {url: string, loop: boolean, autoplay: boolean, title: string};
  playIcon = 'pause';
  audioDuration: number;
  currentPosition: number;
  restTime: string;

  @ViewChild('audioElement', { static: false }) public audioRef: ElementRef;
  private audioEl: HTMLMediaElement;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => this.readAudio());
  }

  ngOnChanges() {
    this.srcAudio = {
      url: this.audio.url,
      loop: this.audio.loop,
      autoplay: true,
      title: this.audio.title
    };
  }

  readAudio() {
    const audios = this.audioEl;
    audios.onloadeddata = () => {
      this.audioDuration = Math.floor(audios.duration);
    };
    audios.addEventListener('timeupdate', () => {
      this.currentPosition = Math.floor(this.audioEl.currentTime);
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
      this.audioEl.pause();
    } else {
      this.playIcon = 'pause';
      this.audioEl.play();
    }
  }
  public ngAfterViewInit() {
    this.audioEl = this.audioRef.nativeElement;
  }
}
