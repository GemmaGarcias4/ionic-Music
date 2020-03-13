import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tracks',
  templateUrl: 'tracks.page.html',
  styleUrls: ['tracks.page.scss']
})
export class TracksPage implements OnInit {

  groupedList = [];

  constructor(private tracksService: TracksService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.tracksService.getTracksDataList()
    .subscribe(
      (data) => { this.groupedArray(data['results'].items); },
      (error) => {console.log(error); }
    );
  }

  groupedArray(data: any) {
    data.forEach((group: any, idx: number) => {
      if (idx % 5 === 0) {
        this.groupedList.push([]);
      }
      this.groupedList[this.groupedList.length - 1].push(group);
    });
  }

  logout() {
    this.authService.logout();
  }
}
