import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { Offer } from 'src/app/models/offers.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

constructor(public dialog: MatDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(OfferComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}





}
