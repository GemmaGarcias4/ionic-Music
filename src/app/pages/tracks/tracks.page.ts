import { Component } from '@angular/core';
import { TracksService } from '../../services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: 'tracks.page.html',
  styleUrls: ['tracks.page.scss']
})
export class TracksPage {

  trackList;
  results: any[];

  constructor(private TracksService: TracksService) {}
  
  ngOnInit(){
    this.TracksService.getTracksDataList()
    .subscribe(
      (data) => { this.trackList = data && data['results'].items;},
      (error) => {console.log(error)}
    )
  }
}