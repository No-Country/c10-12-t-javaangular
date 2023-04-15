import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faLocationDot, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';
import { EditJobOfferComponent } from '../edit-job-offer/edit-job-offer.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  
   

  @Input() offer!: any;
  faLocationDot = faLocationDot;
  faEllipsisVertical = faEllipsisVertical;

  user = {
    'img': '../../../assets/img/face-profile.png'
  }

  isUserOffer: boolean = true;
  editDeleteControls: boolean = false;

  constructor(public dialog: MatDialog, private jobsService: JobsService) {

  }

  editDeleteToggle() {
    this.editDeleteControls = !this.editDeleteControls;
  }

  deleteOffer(id: number) {
    alert('oferta eliminada')
    this.jobsService.deleteJob(id);

  }

  openDialog(id:number) {
    console.log(id)
    this.jobsService.editOfferId=id;

    const dialogRef = this.dialog.open(EditJobOfferComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
