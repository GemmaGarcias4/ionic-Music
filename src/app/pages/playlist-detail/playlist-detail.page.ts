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
  trackActive: Item;

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistsService.getPlaylistDetail(this.playlistId)
    .subscribe(
      (data: any) => {
        this.detailData = data,
        this.trackList = data.playlist.tracks.items.map((el: any) => {
          return {
            ...el,
            urlTrack: `${el.cdn_clip_d}&user_id=bd84ae06-cb86-476e-ad1f-530c3ce5d282`,
            loop: false,
            active: false
          };
        });
      },
      (error: any) => {console.log('Playlist error:', error); }
    );
  }

  handleLoop( event: {id: number, loop: boolean}) {
    const setLoop = [...this.trackList].map((track) => {
      if ( track.id === event.id) {
        track.loop = event.loop; return track;
      } else { return track; }
    });
    this.trackList = setLoop;
  }

  handlePlayOne( audio: {id: number, active: boolean}) {
    let indexActive: number;
    if (audio.id) {
      const tracks = [...this.trackList].map((el, index) => {
        if (el.id === audio.id) {
          el.active = audio.active;
          indexActive = index;
          return el;
        } else {
          el.active = false;
          return el;
        }
      });

      this.trackList = tracks;
      this.trackActive = tracks[indexActive];
    }
  }

  nextTrack( event: {id: number}) {
    this.trackList.forEach((track, index) => {if (track.id === event.id) {
      const currentTrackIndex = index;
      track.active = false;
      this.trackList[currentTrackIndex + 1].active = true;
      this.trackActive = this.trackList[currentTrackIndex + 1];
      }
    });
  }

  prevTrack( event: {id: number}) {
    this.trackList.forEach((track, index) => {if (track.id === event.id) {
      const currentTrackIndex = index;
      track.active = false;
      this.trackList[currentTrackIndex - 1].active = true;
      this.trackActive = this.trackList[currentTrackIndex - 1];
      }
    });
  }

  playFirstTrack( event: {play: boolean} ) {
    const param = {id: this.trackList[0].id, active: true};
    this.handlePlayOne(param);
  }
}
