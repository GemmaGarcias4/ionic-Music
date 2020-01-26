import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable()
export class TracksService {

  constructor(private http: HttpClient) { }
 
  getTracksDataList() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA==');
    return this.http.get('https://edge.musictime.app/api/v1/playlists?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152', {headers});
  }
}