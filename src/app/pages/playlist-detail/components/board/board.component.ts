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

  constructor() { }

  ngOnInit() {
    this.dataObj = this.detailData;
  }

  handlePlaylist() {
    this.playFromBoardPlaylist.emit({play: true});
  }
}
