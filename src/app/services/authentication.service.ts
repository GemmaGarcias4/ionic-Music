import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import authdata from '../../assets/authdata.json';
import { TextAst } from '@angular/compiler';

const TOKEN_KEY = 'Basic bWFnaWNhbGtleTpzdXBlcnNlY3JldA==';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, public toastController: ToastController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  async verifyUser( value: { email: string; password: string; } ) {
    const isMember = authdata.filter((member) => JSON.stringify(member) === JSON.stringify(value)).length !== 0;
    if (isMember) {
      await this.storage.set('token', TOKEN_KEY);
      this.authenticationState.next(true);
    } else {
      const toast = this.toastController.create({
        message: 'You have entered an invalid username or password',
        duration: 2000,
        color: 'danger'
      });
      (await toast).present();
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
    const res = await this.storage.get('token');
    if (res) {
      this.authenticationState.next(true);
    }
  }
}
