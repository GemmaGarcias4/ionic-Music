import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { Storage } from '@ionic/storage';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Storage}
    ]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
