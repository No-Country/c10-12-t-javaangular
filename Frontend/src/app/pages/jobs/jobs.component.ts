import { Component } from '@angular/core';
import { faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  faBriefcase = faBriefcase;
  faGlobe = faGlobe;

  constructor(
    private jobsService: JobsService
  ) {}

  allJobs: any[] = [];

  ngOnInit() {
    this.getAllJobs();
  }


  getAllJobs() {
    this.jobsService.getAllOffers().subscribe(
      (data) => {
        this.allJobs = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
