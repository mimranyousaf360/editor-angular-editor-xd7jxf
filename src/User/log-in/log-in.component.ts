import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocalService } from '../../User/local.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppComponent } from '../../app/app.component';
import { AuthService } from '../../User/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  redirectUrl: any = '';
  users: any = [];
  constructor(
    private auth: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private appcomponent: AppComponent,
    private toster: ToastrService
  ) {
    this.users = [
      {
        email: 'a@gmail.com',
        password: '1',
      },
      {
        email: 'b@gmail.com',
        password: '1',
      },
      {
        email: 'c@gmail.com',
        password: '1',
      },
    ];
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(16),
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.redirectUrl =
      this.activateRoute.snapshot.queryParamMap.get('redirectUrl') || '/';
  }

  logInUser(): void {
    debugger;
    if (this.loginForm.valid) {
      let userAccepted = this.users.filter(
        (s) =>
          s.email == this.loginForm.value.email &&
          s.password == this.loginForm.value.password
      );
      debugger;
      if (userAccepted && userAccepted.length === 1) {
        this.appcomponent.loggedInStatus = true;
        this.auth.login().then(() => {
          // this.router.navigate(['/']);
          debugger;
          this.router.navigateByUrl(this.redirectUrl);
          this.toster.success('Logged In Successfully.');
        });
      } else {
        this.toster.info('Invalid Credentials.');
      }
    }
  }
}
