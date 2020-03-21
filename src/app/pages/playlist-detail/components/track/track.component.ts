import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../../interfaces/playlists/detail';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {

  @Input() track: Item;
  loop = false;

  constructor() { }

  ngOnInit() {}

  handleLoop() {
    this.loop = !this.loop;
  }

  handlePlay() {
    console.log(this.track);
  }

}
