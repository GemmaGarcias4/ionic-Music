import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Storage } from '@ionic/storage';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthGuardService,
      {
        provide: Storage
      }
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
