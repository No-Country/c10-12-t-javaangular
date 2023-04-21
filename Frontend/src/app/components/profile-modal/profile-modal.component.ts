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

  img: string | undefined;

  profileData: any | undefined;

  perfill: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private auth: AuthService
  ) {
    this.img = this.profileService.img64;
  }

  ngOnInit() {

    let id_user = this.auth.idUsuarios();

    this.profileService.getPerfil().subscribe({
      next: (data) => {
        this.profileData = data[0];
        console.log(this.profileData.nombre)
      }
    });

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
    );

    this.setFormWithProfileData();
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

  setFormWithProfileData() {
    this.perfill.patchValue({
      nombre: this.profileData.nombre,
      apellido: this.profileData.apellido,
      descripcion: this.profileData.descripcion,
      ubicacion: this.profileData.ubicacion,
      nacionalidad: this.profileData.nacionalidad,
      telefono: this.profileData.telefono,
      social: this.profileData.social,
      foto: this.profileData.foto
    });
  }

  updateProfile() {
    this.profileService.updatePerfil(this.perfill.getRawValue())
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
      const im = event.target.result.toString(); 
      this.perfill.patchValue({
        foto:im
      });
    };
    reader.readAsDataURL(file);
  }

}
