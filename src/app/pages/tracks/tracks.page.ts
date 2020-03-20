import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks.service';
@Component({
  selector: 'app-tracks',
  templateUrl: 'tracks.page.html',
  styleUrls: ['tracks.page.scss']
})
export class TracksPage implements OnInit {

  groupedList = [];

  constructor(private tracksService: TracksService) {}

  ngOnInit() {
    this.tracksService.getTracksDataList()
    .subscribe(
      (res) => { this.groupedArray(res.results.items); },
      (error) => {console.log(error); }
    );
  }

  groupedArray(items: any) {
    items.forEach((group: any, idx: number) => {
      if (idx % 5 === 0) {
        this.groupedList.push([]);
      }
      this.groupedList[this.groupedList.length - 1].push(group);
    });
  }
}
