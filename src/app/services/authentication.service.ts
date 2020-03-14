import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import authdata from '../../assets/authdata.json';

const TOKEN_KEY = 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA==';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  data: any;

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  async verifyUser( value: { email: string; password: string; } ) {
    const isMember = authdata.filter((member) => JSON.stringify(member) === JSON.stringify(value)).length !== 0;
    if (isMember) {
      await this.storage.set(TOKEN_KEY, TOKEN_KEY);
      this.authenticationState.next(true);
    } else {
      console.log('error');
    }
  }

  login(form: { value: any; }) {
    this.verifyUser(form.value);
  }

  async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  async checkToken() {
    const res = await this.storage.get(TOKEN_KEY);
    if (res) {
      this.authenticationState.next(true);
    }
  }
}
