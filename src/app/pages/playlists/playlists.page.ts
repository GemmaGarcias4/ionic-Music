import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { Item } from 'src/app/interfaces/playlists/list';
@Component({
  selector: 'app-playlists',
  templateUrl: 'playlists.page.html',
  styleUrls: ['playlists.page.scss']
})
export class PlaylistsPage implements OnInit {

  groupedList = [];

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.playlistsService.getPlaylistDataList()
    .subscribe(
      (res) => { this.groupedArray(res); },
      (error) => {console.log(error); }
    );
  }

  groupedArray(items: Item[]) {
    items.map((item) => {
      return {...item, duration: this.secondsToMinutes(item.duration)};
    }).forEach((group: any, idx: number) => {
      if (idx % 5 === 0) {
        this.groupedList.push([]);
      }
      this.groupedList[this.groupedList.length - 1].push(group);
    });
  }

  secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const restSecond = seconds - minutes * 60;
    return minutes + ':' + (+restSecond < 10 ? '0' : '') + restSecond;
  }
}
