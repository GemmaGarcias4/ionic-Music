import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../interfaces/playlists/detail';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {

  @Input() track: Item;
  @Output() clickTrackToPlay = new EventEmitter<string>();
  loop = false;

  constructor() { }

  ngOnInit() {}

  handleLoop() {
    this.loop = !this.loop;
  }

  handlePlay() {
    this.clickTrackToPlay.emit(this.track.cdn_clip_d);
  }
}
