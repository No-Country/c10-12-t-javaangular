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

  isOffers: boolean = false;
  isPortals: boolean = true;

  constructor() {}

  showOffers() {
    this.isOffers = true;
    this.isPortals = false;
  }
  
  showPortals() {
    this.isPortals = true;
    this.isOffers = false;
  }

}
