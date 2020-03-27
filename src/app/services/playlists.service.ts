import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObjectList } from '../interfaces/playlists/list';
import { RootObjectDetail } from '../interfaces/playlists/detail';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const urlBase = environment.apiUrl;

const headers = new HttpHeaders({
  Authorization: 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA=='
});
@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>( query: string ) {
    query = urlBase + query;
    return this.http.get<T>(query, {headers});
  }

  getPlaylistDataList() {
    return this.executeQuery<RootObjectList>('/playlists?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152')
    .pipe(
      map(res => res.results.items)
    );
  }

  getPlaylistDetail( playlistId: any ) {
    return this.executeQuery<RootObjectDetail>(`/playlists/${playlistId}?user_id=d89dfdf8-f683-41df-beef-8b6b96936185`)
    .pipe(
      map(res => res.playlist)
    );
  }
}
