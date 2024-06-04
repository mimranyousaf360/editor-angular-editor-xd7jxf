import { Component } from '@angular/core';
import { LocalService } from '../User/local.service';
import { Location } from '@angular/common';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../User/auth.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loggedInStatus: boolean = false;
  constructor(
    private router: Router,
    private auth: AuthService,
    private location: Location
  ) {
    this.loggedInStatus = this.auth.isLoggedIn();
  }

  logout() {
    debugger;
    this.loggedInStatus = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/logIn']);
  }
}
