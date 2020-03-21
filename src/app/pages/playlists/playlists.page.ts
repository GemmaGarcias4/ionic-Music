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
      (res) => { this.groupedArray(res.results.items); },
      (error) => {console.log(error); }
    );
  }

  groupedArray(items: Item[]) {
    items.forEach((group: any, idx: number) => {
      if (idx % 5 === 0) {
        this.groupedList.push([]);
      }
      this.groupedList[this.groupedList.length - 1].push(group);
    });
  }
}
