import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AuthService } from 'src/app/services/auth.service';
import { JobsService } from 'src/app/services/jobs.service';
import { environment } from 'src/environments/environment';

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
  ) {}

  ngOnInit() {
    let id_user=this.auth.idUsuarios();
    this.newOffer = this.fb.group(
      {
        user_id: [id_user, Validators.required],
        cargo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        sueldo: ['', Validators.required],
        descripcion: ['', Validators.required],
        telefono: ['', Validators.required]
      }
    )
/*     this.createOffer(); */
  }

  createOffer() {
    this.jobsService.createJob(this.newOffer.getRawValue());
  }

}
