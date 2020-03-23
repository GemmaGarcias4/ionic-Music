import { Component, OnChanges, Input, Output, ViewChild, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Item } from '../../interfaces/playlists/detail';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnChanges, AfterViewInit {

  @Input() audio: Item;
  @Output() sendNextTrack = new EventEmitter<object>();
  srcAudio: Item;
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
    if (this.srcAudio && this.audio.id !== this.srcAudio.id) {
      console.log('onchange')
      this.audioHtmlEl.setAttribute('src', this.audio.urlTrack);
      this.srcAudio = this.audio;
      this.playIcon = 'pause';
    } else {
      this.srcAudio = this.audio;
    }
  }

  readAudio() {
    const audio = this.audioHtmlEl;
    this.getAudioDuration(audio);
    setInterval(() =>  this.timeUpdate(audio), 1000);
    audio.addEventListener('ended',
      () => {
        this.playIcon = 'play',
        this.nextSong(this.srcAudio.id);
      }
    );
  }

  nextSong = (id: number) => {
    this.sendNextTrack.emit({id});
  }

  getAudioDuration = (audio: HTMLMediaElement) => {
    audio.onloadeddata = () => {
      this.audioDuration = Math.floor(audio.duration);
    };
  }

  timeUpdate = (audio: HTMLMediaElement) => {
    audio.addEventListener('timeupdate', () => {
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
