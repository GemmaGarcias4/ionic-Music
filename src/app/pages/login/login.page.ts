import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this.authService.login(this.user);
  }
}
