import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackDetailPage } from './track-detail.page';

describe('TrackDetailPage', () => {
  let component: TrackDetailPage;
  let fixture: ComponentFixture<TrackDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
