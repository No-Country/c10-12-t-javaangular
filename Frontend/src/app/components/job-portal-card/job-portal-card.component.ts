import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-portal-card',
  templateUrl: './job-portal-card.component.html',
  styleUrls: ['./job-portal-card.component.css']
})
export class JobPortalCardComponent {

  @Input() portal!: any;
  faArrowRight = faArrowRight;

}
