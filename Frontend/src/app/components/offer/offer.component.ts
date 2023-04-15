import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
    private jobsService: JobsService,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    let id_user=this.auth.idUsuarios();
    this.newOffer = this.fb.group(
      {
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: ['', Validators.required],
        descripcion: ['', Validators.required],
        telefono: ['', Validators.required],
        status: ['', Validators.required],
        name: ['', Validators.required],
        user_id: [id_user, Validators.required],
      }
    )
    console.log('newOffer', this.newOffer.value)
  }



  createOffer() {
   
      console.log(this.newOffer.value)
      this.jobsService.createJob(this.newOffer.value);
    
  }

}
