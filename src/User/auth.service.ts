import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  login(): Promise<any> {
    debugger;
    return new Promise((promise) => {
      debugger;
      localStorage.setItem('loggedIn', 'true');
      promise(true);
    });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}
