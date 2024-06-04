import { Injectable } from '@angular/core';

@Injectable()
export class JobServiceService {
  constructor() {}

  getJobsList() {
    const JobList = [
      {
        Id: 1,
        Company: 'XYZ',
        Title: 'Software Engineer I',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 2,
        Company: 'XYZ',
        Title: 'Software Enlgineer',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 3,
        Company: 'ABC',
        Title: 'Consultant',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 4,
        Company: 'ABC',
        Title: 'Graphic Designer',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 5,
        Company: 'XYZ',
        Title: 'Human Resource',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 6,
        Company: 'XYZ',
        Title: 'Principal Sofware Engineer',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
      {
        Id: 7,
        Company: 'ABC',
        Title: 'Software Engineer',
        Description:
          'With supporting text below as a natural lead-in to additional content.',
      },
    ];
    return JobList;
  }
}
