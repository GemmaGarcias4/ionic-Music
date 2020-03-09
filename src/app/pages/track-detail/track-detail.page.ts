import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.page.html',
  styleUrls: ['./track-detail.page.scss'],
})
export class TrackDetailPage implements OnInit {

  trackId: any;
  detailData: any;

  constructor(private route: ActivatedRoute, private tracksService: TracksService) { }

  ngOnInit() {
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.tracksService.getTrackDetail(this.trackId)
    .subscribe(
      (data: any) => this.detailData = data,
      (error: any) => {console.log(error); }
    );
  }

}
