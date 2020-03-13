import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA==';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  login(form: { value: any; }) {
    console.log('form:', form.value);
    return this.storage.set(TOKEN_KEY, 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA==').then( res => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then( () => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then( res => {
      if (res) { this.authenticationState.next(true) }
    });
  }
}
