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

describe('Tracks data', () => {
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
        .subscribe((items: any) => {
        expect(items.length).toBe(1);
        expect(items).toBe(dummyItems);
        });
        const req = httpTestingController.expectOne(
            `${tracksService.urlBase}?except_attributes=tracks&user_id=1372a510-60b0-42c1-a3e1-8bdc64d37152`);
        expect(req.request.method).toEqual('GET');
        req.flush(dummyItems);
        httpTestingController.verify();
      });
    });
  });

describe('Track Details', () => {
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
      it('gets track detail', () => {
        const dummyDetails = {playlists: 'title1'};
        const trackId = '1234';

        tracksService.getTrackDetail(trackId)
        .subscribe((value: any) => {
        expect(value).toBe(dummyDetails);
        });
        const request = httpTestingController.expectOne(
            `${tracksService.urlBase}/${trackId}?user_id=d89dfdf8-f683-41df-beef-8b6b96936185`);
        expect(request.request.method).toEqual('GET');
        request.flush(dummyDetails);
        httpTestingController.verify();
      });
    });
  });
