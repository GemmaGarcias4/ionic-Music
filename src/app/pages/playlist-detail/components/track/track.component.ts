import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../interfaces/playlists/detail';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {

  @Input() track: Item;
  @Output() clickTrackToPlay = new EventEmitter<object>();
  @Output() clickLoopBtn = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}

  handleLoop() {
    this.clickLoopBtn.emit({
      id: this.track.id,
      loop: !this.track.loop
    });
  }

  handlePlay() {
    this.clickTrackToPlay.emit({
      id: this.track.id,
      active: this.track.active
    });
  }
}
