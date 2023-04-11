import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent {

  offers = [
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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(OfferComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  faPlus = faPlus;

}