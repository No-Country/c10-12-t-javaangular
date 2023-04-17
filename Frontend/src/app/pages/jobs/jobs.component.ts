import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  faBriefcase = faBriefcase;
  faGlobe = faGlobe;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

}
