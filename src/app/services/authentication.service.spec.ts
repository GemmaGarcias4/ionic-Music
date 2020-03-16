import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { Storage } from '@ionic/storage';

describe('AuthenticationService', () => {
  const storage = new Storage({         // Define Storage
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  });

  const storageIonicMock: any = {
    set: () => new Promise<any>((resolve, reject) => resolve(storage['token'] = 'Basic As2342fAfgsdr')),
    get: () => new Promise<any>((resolve, reject) => resolve( storage['token']))
   };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticationService,
      {
        provide: Storage,
        useValue: storageIonicMock
      }
    ]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
