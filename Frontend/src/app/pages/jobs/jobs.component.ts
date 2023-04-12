import { Component } from '@angular/core';
import { faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  faBriefcase = faBriefcase;
  faGlobe = faGlobe;

}