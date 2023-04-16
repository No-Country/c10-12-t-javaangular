import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {

  newOffer: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private profileService: ProfileService){}

  ngOnInit() {
    // let id_user=this.auth.idUsuarios();
    this.newOffer = this.fb.group(
      {
        name: [''],
        lastname: [''],
        photo: [''],
        country: [''],
        description: [''],
        location: [''],
        phone: [''],
        social: [''],
        // user_id: [id_user, Validators.required],
      }
    )
  }

  updateProfile() {
    this.profileService.updateProfile()
    // this.jobsService.createJob(this.newOffer.getRawValue());
  }

}
