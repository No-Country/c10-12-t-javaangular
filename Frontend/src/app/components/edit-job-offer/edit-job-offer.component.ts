import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrls: ['./edit-job-offer.component.css']
})
export class EditJobOfferComponent {

  @Input() offers:any; 
  editedOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService
  ) {
   
  }

  ngOnInit() {
    const idd=this.jobsService.editOfferId;
    this.editedOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: ['', Validators.required],
        descripcion: ['', Validators.required],
        telefono: ['', Validators.required],
        fecha: [new Date()]
      }
    )
    console.log('editedOffer', this.editedOffer.value)
      console.log('desde jobService', this.jobsService.editOfferId)
     this.byId(idd)
  }


 editOffer() {

 
  /*     if (this.editedOffer.valid) {
      console.log(id);
    } */
  } 


  byId(id:any){
    let n:any;
    this.jobsService.findByIdJob(id).subscribe(res=>n=res);
    console.log(n)
  
  }


}
