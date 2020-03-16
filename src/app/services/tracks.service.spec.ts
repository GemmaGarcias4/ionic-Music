import {
    HttpBackend,
    HttpClient
  } from '@angular/common/http';
import {
    HttpTestingController,
    HttpClientTestingModule
  } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { TracksService } from './tracks.service';

describe('IssTrackingDataService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let tracksService: TracksService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            TracksService
        ]
      });

      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
      tracksService = new TracksService(httpClient);
    });

    it('exists', inject([TracksService], (service: TracksService) => {
        expect(service).toBeTruthy();
    }));

    describe('tracks', () => {
      it('gets track list', () => {
        const dummyItems = {title: 'title1'};

        tracksService.getTracksDataList()
        .subscribe((posts: any) => {
        expect(posts.length).toBe(1);
        });
        const req = httpTestingController.expectOne(
            `${tracksService.urlBase}?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152`);
        expect(req.request.method).toEqual('GET');
        req.flush(dummyItems);
        httpTestingController.verify();
      });
    });
  });