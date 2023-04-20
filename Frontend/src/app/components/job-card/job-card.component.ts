import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faLocationDot, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';
import { EditJobOfferComponent } from '../edit-job-offer/edit-job-offer.component';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {   
  titularAlerta="";
  @Input() offer!: any;
  faLocationDot = faLocationDot;
  faEllipsisVertical = faEllipsisVertical;

  user = {
    'img': '../../../assets/img/face-profile.png'
  }

  isUserOffer: boolean = false;
  editDeleteControls: boolean = false;

  constructor(
    public dialog: MatDialog,
    private jobsService: JobsService,
    private auth: AuthService) {
  }

  ngOnInit(): void {
    if (this.offer.user_id == this.auth.idUsuarios()) {
      this.isUserOffer = true;
    } else {
      this.isUserOffer = false;
    }
  }

  editDeleteToggle() {
    this.editDeleteControls = !this.editDeleteControls;
  }

  deleteOffer(id: number) {
    this.jobsService.deleteJob(id);
  }

  openDialog(id:number) {
    this.jobsService.editOfferId=id;
    const dialogRef = this.dialog.open(EditJobOfferComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  confirmar(){

    Swal.fire('Oferta Aplicada', this.titularAlerta, 'success');

  
}


}
