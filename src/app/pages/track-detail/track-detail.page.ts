import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks.service';
import { ActivatedRoute } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.page.html',
  styleUrls: ['./track-detail.page.scss'],
})
export class TrackDetailPage implements OnInit {

  trackId: any;
  detailData: any;

  constructor(private route: ActivatedRoute, private tracksService: TracksService, private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.tracksService.getTrackDetail(this.trackId)
    .subscribe(
      (data: any) => this.detailData = data,
      (error: any) => {console.log(error); }
    );
  }

  ionViewWillEnter() {
    this.nativeAudio.preloadComplex('one', 
    'https://audio.musictime.app/dynamic/mp3_64/3/9/7/e/397e376f15f6b10df26264731c85ddc0.mp3?nvb=20200225144612&nva=20200310113215&encoded=05598b38ea1fb0c1a79cc', 1, 1, 0)
  }

  playAudio() {
    this.nativeAudio.play('one');
  }
}
