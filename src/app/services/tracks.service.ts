import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObject } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const urlBase = environment.apiUrl;

const headers = new HttpHeaders({
  Authorization: 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA=='
});
@Injectable()
export class TracksService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>( query: string ) {
    query = urlBase + query;
    return this.http.get<T>(query, {headers});
  }

  getTracksDataList() {
    return this.executeQuery<RootObject>('/playlists?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152');
  }

  getTrackDetail( trackId: any ) {
    return this.executeQuery(`/playlists'/${trackId}?user_id=d89dfdf8-f683-41df-beef-8b6b96936185`);
  }
}
