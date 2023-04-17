import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {

  newOffer: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private auth: AuthService,){}



  // async updateProfilePhoto() {
  //   const id = 1; // ID del usuario actual
  //   const photo = this.profileForm.get('photo');
  //   if (photoControl.valid) {
  //     const photo = photoControl.value;
  //     await this.profileService.updateProfile(photo, id);
  //     const perfil = await this.profileService.getPerfil();
  //     this.photo = perfil?.photo;
  //   }
  // }

  updateProfile() {
    // this.profileService.updateProfile(this.)
    // this.jobsService.createJob(this.newOffer.getRawValue());
  }

}
