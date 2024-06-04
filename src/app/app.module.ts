import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JobServiceService } from '../job-service.service';
import { PaymentGateWayComponent } from '../payment-gate-way/payment-gate-way.component';
import { LogInComponent } from '../User/log-in/log-in.component';
import { LocalService } from '../User/local.service';
import { AuthGuard } from '../User/auth.guard';
import { AuthService } from '../User/auth.service';
import { LayOutComponent } from './lay-out/lay-out.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'angular-crumbs';
import { JobsComponent } from './Jobs/app-jobs.component';
import { ApplyComponent } from './Jobs/apply/app-apply.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayOutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: 'jobs', component: JobsComponent, data: { breadcrumb: 'Jobs' } },
      {
        path: 'jobs',
        data: { breadcrumb: 'Jobs' },
        children: [
          {
            path: 'apply/:id',
            component: ApplyComponent,
            data: { breadcrumb: 'Apply' },
          },
        ],
      },
      {
        path: 'paymentGateWay',
        component: PaymentGateWayComponent,
        data: { breadcrumb: 'PaymentGateWay' },
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: 'logIn', component: LogInComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    RouterModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    JobsComponent,
    ApplyComponent,
    PaymentGateWayComponent,
    LogInComponent,
    LayOutComponent,
  ],
  bootstrap: [AppComponent],
  providers: [JobServiceService, LocalService, AuthService, AuthGuard],
})
export class AppModule {}
