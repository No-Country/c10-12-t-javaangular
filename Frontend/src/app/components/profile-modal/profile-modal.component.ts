import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {
img:string|undefined;
  perfill: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private auth: AuthService,){
     this.img=this.profileService.img64;
     console.log('desde el formulario oninit',this.img);
    }

    ngOnInit() {
      let id_user=this.auth.idUsuarios();
      
     
      this.perfill = this.fb.group(
        {
          user_id: [id_user, Validators.required],
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          descripcion: ['', Validators.required],
          ubicacion: ['', Validators.required],
          nacionalidad: ['', Validators.required],
          telefono: ['', Validators.required],
          social: ['', Validators.required],
          foto:['']
        }
      )
    }
  

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

  updateProfil() {
    this.profileService.updatePerfil(this.perfill.getRawValue())
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
        const im = event.target.result.toString(); 
        this.perfill.patchValue({
          foto:im
        })
        console.log(im)
    };
    reader.readAsDataURL(file);
  }

}
