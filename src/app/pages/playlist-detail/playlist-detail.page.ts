import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../interfaces/playlists/detail';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.page.html',
  styleUrls: ['./playlist-detail.page.scss'],
})
export class PlaylistDetailPage implements OnInit {

  playlistId: any;
  detailData: any;
  trackList: Item[];
  audioSrc: {url: string, loop: boolean, title: string};

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistsService.getPlaylistDetail(this.playlistId)
    .subscribe(
      (data: any) => {
        this.detailData = data,
        this.trackList = data.playlist.tracks.items;
      },
      (error: any) => {console.log('Playlist error:', error); }
    );
  }

  handlePlayOne( audio: {urlTrack: string, loop: boolean, title: string}) {
    if (audio) {
      this.audioSrc = {
        url: `${audio.urlTrack}&user_id=bd84ae06-cb86-476e-ad1f-530c3ce5d282`,
        loop: audio.loop,
        title: audio.title
      }
    }
  }
}
