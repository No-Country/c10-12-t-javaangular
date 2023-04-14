import { Component } from '@angular/core';
import { faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  faBriefcase = faBriefcase;
  faGlobe = faGlobe;

  constructor(
    private api: ApiService
  ) {}

  allJobs: any[] = [];

  ngOnInit() {
    this.getAllJobs();
  }


  getAllJobs() {
    this.api.getAllJobs().subscribe(
      (data) => {
        this.allJobs = data;
        console.log(this.allJobs);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(this.allJobs)
  }

}
