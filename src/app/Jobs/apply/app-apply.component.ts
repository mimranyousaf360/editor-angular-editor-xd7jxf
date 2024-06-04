import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobServiceService } from '../../../job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './app-apply.component.html',
  styleUrls: ['./app-apply.component.css'],
})
export class ApplyComponent implements OnInit {
  public jobId = null;
  public applyForJob = null;
  constructor(
    private toastr: ToastrService,
    private jobService: JobServiceService,
    private route: ActivatedRoute
  ) {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.applyForJob = this.jobService
      .getJobsList()
      .filter((x) => x?.Id == this.jobId)[0];
  }

  ngOnInit(): void {}

  SubmitRequest() {
    this.toastr.success(
      'Applid For Position ' + this.applyForJob.Title + ' Successfully',
      'Applied'
    );
  }
}
