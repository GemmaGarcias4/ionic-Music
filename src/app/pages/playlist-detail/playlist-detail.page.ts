import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.page.html',
  styleUrls: ['./playlist-detail.page.scss'],
})
export class PlaylistDetailPage implements OnInit {

  playlistId: any;
  detailData: any;

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistsService.getPlaylistDetail(this.playlistId)
    .subscribe(
      (data: any) => this.detailData = data,
      (error: any) => {console.log('Playlist error:', error); }
    );
  }
}
