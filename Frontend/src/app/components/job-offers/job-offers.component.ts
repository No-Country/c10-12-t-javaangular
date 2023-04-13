import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OfferComponent } from '../offer/offer.component';
import { Observable, of } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  // offers = [
  //   {
  //     'title': 'Asistente',
  //     'date': '02/05/2023',
  //     'location': 'Buenos Aires',
  //     'salary': '300',
  //     'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
  //   },
  //   {
  //     'title': 'Asistente',
  //     'date': '02/05/2023',
  //     'location': 'Buenos Aires',
  //     'salary': '300',
  //     'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
  //   },
  //   {
  //     'title': 'Asistente',
  //     'date': '02/05/2023',
  //     'location': 'Buenos Aires',
  //     'salary': '300',
  //     'description': 'As a UX Designer, you will: Work with stakeholders to set priorities and find elegant design solutions that meet user and business goals within technical constraints.',
  //   },
  // ]

  faPlus = faPlus;
  offers: any[] = [];
  offers$: Observable<any[]> = this.jobsService.offers$;

  constructor(public dialog: MatDialog, private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getAllOffers();
    this.offers$ = this.jobsService.offers$;
  }

  filtrarRecientes() {    
    this.offers$.subscribe(
      data => {
        const datosFiltrados = data.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
        this.offers$ = of(datosFiltrados);
        console.log(this.offers);
      }
    )
  }

  filtrarAntiguas() {
    this.offers$.subscribe(
      data => {
        const datosFiltrados = data.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
        this.offers$ = of(datosFiltrados);
        console.log(this.offers);
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(OfferComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}