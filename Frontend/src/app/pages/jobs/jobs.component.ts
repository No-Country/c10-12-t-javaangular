import { Component } from '@angular/core';
import { faBriefcase, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  faBriefcase = faBriefcase;
  faGlobe = faGlobe;
  faPlus = faPlus;

  array = [
    {
      'title': 'Asistente',
      'date': '02/05/2023',
      'location': 'Buenos Aires',
      'salary': '300',
      'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
    {
      'title': 'Asistente',
      'date': '02/05/2023',
      'location': 'Buenos Aires',
      'salary': '300',
      'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
    {
      'title': 'Asistente',
      'date': '02/05/2023',
      'location': 'Buenos Aires',
      'salary': '300',
      'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
    },
  ]

}
