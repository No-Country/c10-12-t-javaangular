import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.css']
})
export class UserJobsComponent implements OnInit {

  userJobOffers: any | undefined;

  constructor(
    private matDialog: MatDialog,
    private jobsService: JobsService
  ) {}
  
  ngOnInit(): void {
    this.jobsService.getUserJobsObservable().subscribe({
      next: (data) => {
        this.userJobOffers = data;
      }
    });
  }

  openDialog() {
    const dialogRef = this.matDialog.open(OfferComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

}
