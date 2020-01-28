import { Component } from '@angular/core';
import { TracksService } from '../../services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: 'tracks.page.html',
  styleUrls: ['tracks.page.scss']
})
export class TracksPage {

  groupedList = [];
  results: any[];

  constructor(private TracksService: TracksService) {}
  
  ngOnInit(){
    this.TracksService.getTracksDataList()
    .subscribe(
      (data) => { data && this.groupedArray(data['results'].items);},
      (error) => {console.log(error)}
    )
  }

  groupedArray(data: any){
    data.forEach((group, idx) => {
      if (idx % 5 === 0) {
        this.groupedList.push([]);
      }
      this.groupedList[this.groupedList.length - 1].push(group);
    })
  }
}