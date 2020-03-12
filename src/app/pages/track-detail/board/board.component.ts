import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  @Input('detailData') detailData: any;
  dataObj: any;

  constructor() { }

  ngOnInit() {
    this.dataObj = this.detailData;
  }

}
