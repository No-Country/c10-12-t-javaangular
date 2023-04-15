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

  private supabase: SupabaseClient;

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.publicKey
    )
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

  // createOffer() {
    // this.jobsService.createJob(this.newOffer.getRawValue());

    // this.http.post('https://xbslofkvpgejobohqcqp.supabase.co/rest/v1/trabajo', JSON.parse(this.newOffer.getRawValue()));

  createOffer() {

      console.log(this.newOffer.value)
      this.jobsService.createJob(this.newOffer.value);

  }



}
