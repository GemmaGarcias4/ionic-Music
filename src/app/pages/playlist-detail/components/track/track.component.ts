import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Item } from '../../../../interfaces/playlists/detail';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {

  @Input() track: Item;
  @Output() playTrack = new EventEmitter<object>();
  @Output() handleLoopFromTrack = new EventEmitter<object>();

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {}

  handleLoop() {
    const {id, loop} = this.track;
    this.handleLoopFromTrack.emit({ id, loop: !loop });
  }

  handlePlay() {
    const {id, active} = this.track;
    this.playTrack.emit({ id, active: !active });
  }

  handleShare() {
    this.socialSharing.share(
      this.track.title,
      this.track.artist_name,
      null,
      this.track.cover
    );
  }

}
