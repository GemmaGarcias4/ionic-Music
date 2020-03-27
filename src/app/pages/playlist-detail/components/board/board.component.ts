import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  @Input() detailData: any;
  @Output() playFromBoardPlaylist = new EventEmitter<object>();
  dataObj: any;
  playAllTracks= false;

  constructor() { }

  ngOnInit() {
    this.dataObj = this.detailData;
  }

  handlePlaylist() {
    this.playAllTracks = !this.playAllTracks;
    this.playFromBoardPlaylist.emit({play: true});
  }

  coverImagePlay() {
    if(this.playAllTracks){
      return "../../../../../assets/img/pause-blue.png"
    } else {
      return "../../../../../assets/img/play-white.png"
    }
  }
}
