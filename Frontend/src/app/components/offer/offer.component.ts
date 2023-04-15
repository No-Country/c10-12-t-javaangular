import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  newOffer: FormGroup = new FormGroup({

  });

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService
  ) {

  }

  ngOnInit() {
    this.newOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: ['', Validators.required],
        descripcion: ['', Validators.required],
        telefono: ['', Validators.required],
        status: ['', Validators.required],
        name: ['', Validators.required],
      }
    )
    console.log('newOffer', this.newOffer.value)
  }



  createOffer() {
   
      console.log(this.newOffer.value)
      this.jobsService.createJob(this.newOffer.value);
    
  }

}
