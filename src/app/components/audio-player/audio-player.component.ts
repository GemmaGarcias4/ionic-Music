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
  @Output() handleLoopFromPlayer = new EventEmitter<object>();
  srcAudio: Item;
  playIcon = 'pause';
  audioDuration: number;
  currentPosition: number;
  restTime: string;

  @ViewChild('audioElement', { static: false }) public audioRef: ElementRef;
  private audioHtmlEl: HTMLMediaElement;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => this.audioListener());
  }

  ngOnChanges() {
    if (this.srcAudio && this.audio.id !== this.srcAudio.id) {
      this.audioHtmlEl.setAttribute('src', this.audio.urlTrack);
      this.srcAudio = this.audio;
      this.onPlay();
    } else {
      this.srcAudio = this.audio;
    }
  }

  handleAudioLoop() {
    const { srcAudio } = this;
    srcAudio.loop = !srcAudio.loop;
    this.handleLoopFromPlayer.emit({ id: srcAudio.id, loop: srcAudio.loop });
  }

  handleOnPlayPause() {
    if ( this.playIcon === 'pause' ) { this.onPause();
    } else { this.onPlay(); }
  }

  onPlay() {
    this.playIcon = 'pause';
    this.audioHtmlEl.play();
  }

  onPause() {
    this.playIcon = 'play';
    this.audioHtmlEl.pause();
  }

  handleNextSong = (id: number) => {
    this.sendNextTrack.emit({id});
  }

  handlePrevSong = (id: number) => {
    console.log('prev song')
  }

  audioListener() {
    const audio = this.audioHtmlEl;
    this.getAudioDuration(audio);
    setInterval(() => this.getRestTimeUpdate(audio), 1000);
    this.getNextSongAutomatically(audio);
  }

  getNextSongAutomatically(audio) {
    audio.addEventListener('ended',
    () => {
      this.playIcon = 'play',
      this.handleNextSong(this.srcAudio.id);
    });
  }

  getAudioDuration = (audio: HTMLMediaElement) => {
    audio.onloadeddata = () => {
      this.audioDuration = Math.floor(audio.duration);
    };
  }

  getRestTimeUpdate = (audio: HTMLMediaElement) => {
    audio.addEventListener('timeupdate', () => {
      this.currentPosition = Math.floor(this.audioHtmlEl.currentTime);
      this.restTime = this.convertSec(this.audioDuration - this.currentPosition);
    });
  }

  convertSec(seconds: number) {
    const min = Math.floor((seconds / 60 / 60) * 60);
    const sec = Math.floor(((seconds / 60 / 60) * 60 - min) * 60);
    const secD = sec < 10 ? `0${sec}` : sec;
    return `${min}:${secD}`;
  }

  public ngAfterViewInit() {
    this.audioHtmlEl = this.audioRef.nativeElement;
  }
}
