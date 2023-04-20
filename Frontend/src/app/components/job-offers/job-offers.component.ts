import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OfferComponent } from '../offer/offer.component';
import { JobsService } from 'src/app/services/jobs.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  
  faPlus = faPlus;

  offers: any;

  constructor(
    public dialog: MatDialog,
    private jobsService: JobsService,
    private auth:AuthService) {
  }

  mostrarAntiguedad = false;
  mostrarAplicadas = false;

  toggleAntiguedad() {
    this.mostrarAntiguedad = !this.mostrarAntiguedad;
    this.mostrarAplicadas = false;
  }

  togglePortales() {
    this.mostrarAplicadas = !this.mostrarAplicadas;
    this.mostrarAntiguedad = false;
  }

  ngOnInit(): void {
    this.jobsService.getOffersObservable().subscribe({
      next: (data) => {
        this.offers = data;
      }
    })
  }  

  openDialog() {
    const dialogRef = this.dialog.open(OfferComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
