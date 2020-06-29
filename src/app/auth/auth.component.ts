import { Component, OnInit } from '@angular/core';
import { AuthSERVICES } from '../SERVICES/auth.SERVICES';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authSERVICES: AuthSERVICES, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = this.authSERVICES.isAuth;
  }

  onSignIN() {
    this.authSERVICES.signIn().then(() => {
      this.router.navigate( ['services'])
      this.authStatus = this.authSERVICES.isAuth;
      
    });
  }
  onSignOut() {
    this.authSERVICES.signOut();
    this.authStatus = this.authSERVICES.isAuth;
  }
}
