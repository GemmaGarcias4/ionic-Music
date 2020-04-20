import {
    HttpBackend,
    HttpClient
  } from '@angular/common/http';
import {
    HttpTestingController,
    HttpClientTestingModule
  } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { PlaylistsService } from './playlists.service';

describe('PlaylistsService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let playlistsService: PlaylistsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            PlaylistsService
        ]
      });
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
      playlistsService = new PlaylistsService(httpClient);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('exists', inject([PlaylistsService], (service: PlaylistsService) => {
        expect(service).toBeTruthy();
    }));
    it('should retrieve playlists from the API via GET', inject([PlaylistsService], (service: PlaylistsService) => {
        const dummyPlaylist = {
            items: [
            {
                playlist: 'string',
                href: 'string',
                id: 1,
            },
            {
                playlist: 'string',
                href: 'string',
                id: 1,
            }
        ]
    };

        service.getPlaylistDataList().subscribe((playlist => {
            expect(playlist.length).toBe(2);
        }));
        const url = 'https://edge.musictime.app/api/v1/playlists?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152';
        const request = httpTestingController.expectOne(url);
        expect(request.request.method).toBe('GET');

        request.flush(dummyPlaylist.items);
    }));

    it('should retrieve playlists details from the API via GET', inject([PlaylistsService], (service: PlaylistsService) => {
        const dummyPlaylistDetail = {
            playlist: {
                artists: [],
                href: 'string',
                id: 1,
            }
        };

        service.getPlaylistDetail('23324398').subscribe((playlist => {
            expect(playlist).toBeDefined();
        }));
        const url = 'https://edge.musictime.app/api/v1/playlists/23324398?user_id=d89dfdf8-f683-41df-beef-8b6b96936185';
        const request = httpTestingController.expectOne(url);
        expect(request.request.method).toBe('GET');

        request.flush(dummyPlaylistDetail);
    }));
});