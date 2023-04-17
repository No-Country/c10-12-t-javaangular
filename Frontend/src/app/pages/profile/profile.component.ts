import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { DeleteAccountDialogComponent } from 'src/app/components/delete-account-dialog/delete-account-dialog.component';

import { faLocationDot, faPhone, faHashtag, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileModalComponent } from 'src/app/components/profile-modal/profile-modal.component';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  formularioPerfil: FormGroup;

  // ngOnInit() {

  //   this.profile = this.fb.group(
  //     {
  //       name: [''],
  //       lastname: [''],
  //       photo: [''],
  //       country: [''],
  //       description: [''],
  //       location: [''],
  //       phone: [''],
  //       social: [''],
  //       // user_id: [id_user, Validators.required],
  //     }
  //   )
  // }


  meOffert=[];
  hidde = true;
  dateUser="";
  faFlech = faEye;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faHashtag = faHashtag;

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.nombreUsuario();
  }

  mostrar() {
    this.hidde = !this.hidde;
  }


  faUser = faUser;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.formularioPerfil = new FormGroup({
      photo: new FormControl('')
    });
  }

  nombreUsuario(){
    if(this.auth.access_token()){
      console.log("holasusana")
    }
  }

  // deleteAccount() {
  //   console.log('Acá se elimina tu cuenta');
  //   this.auth.deleteAccount();
  //   this.dialog.open(DeleteAccountDialogComponent);
  // }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // ngOnInit() {
  //   let userId = this.auth.idUsuarios();
  // }

  getProfile(){
    // this.profileService.getPerfil()
  }

  updateProfilePhoto() {
    const id = this.auth.idUsuarios();
    console.log('elci',id);
    const foto = this.formularioPerfil.getRawValue();
    // this.profileService.updateProfile(foto, id);
  }

  // ChatGPT
  user: any;


  // async ngOnInit() {
  //   let userId = this.auth.idUsuarios();
  //   this.user = await this.profileService.getProfile(userId);
  // }

  // async updateProfile() {
  //   const file = this.formularioPerfil.getRawValue();
  //   if (file instanceof File || file instanceof Blob) {

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = async () => {
  //       if (reader.result !== null) {
  //         const base64Image = reader.result.toString().split(',')[1];
  //         console.log(base64Image)
  //         const updates = { name: 'John', bio: 'Hello, world!', photo: base64Image };
  //         const userId = this.auth.idUsuarios();
  //         try {
  //           const updatedProfile = await this.profileService.updateProfile(userId, updates);
  //           console.log('Profile updated:', updatedProfile);
  //         } catch (error) {
  //           console.error('Error updating profile:', error);
  //         }
  //       } else {
  //         console.error('Error: FileReader result is null.');
  //       }
  //     };
  //   }
  // }

  async updateProfile() {
    this.onUpload()

    // const file = this.formularioPerfil.getRawValue();
    // console.log('File:', file);

    // if (file instanceof File || file instanceof Blob) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);

    //   reader.onload = async () => {
    //     console.log('FileReader onload function called.');
    //     console.log('reader.result:', reader.result);
    //     try {
    //       if (reader.result !== null) {
    //         const base64Image = reader.result.toString().split(',')[1];
    //         console.log('Base64 image:', base64Image);
    //         const updates = { name: 'John', bio: 'Hello, world!', photo: base64Image };
    //         const userId = this.auth.idUsuarios();
    //         const updatedProfile = await this.profileService.updateProfile(userId, updates);
    //         console.log('Profile updated:', updatedProfile);
    //       } else {
    //         console.error('Error: FileReader result is null.');
    //       }
    //     } catch (error) {
    //       console.error('Error in FileReader onload function:', error);
    //     }
    //   };
    // }
  }

form = document.getElementById('avatar-form');
input = document.getElementById('avatar-input');
submit = document.getElementById('avatar-submit');
error: string | undefined;

onFileSelected(event: any) {
  this.input = event.target.files[0];
}

onUpload() {
  if (!this.input) {
    this.error = 'Seleccione un archivo para subir.';
    return;
  }

  const formData = new FormData();
  formData.append('avatar', 'avatar-input');

  this.http.post('/upload-avatar', formData).subscribe(
    (response: any) => {
      // Verificar si la carga del archivo se realizó con éxito y actualizar la interfaz de usuario en consecuencia
      this.form = response.avatarUrl;
      this.error = undefined;
    },
    (error: any) => {
      // Mostrar una notificación al usuario si hay algún error durante el proceso de carga
      this.error = 'Ocurrió un error al subir el archivo.';
      console.error(error);
    }
  );
}
}

  // async updateProfile() {
  //   const file = this.formularioPerfil.getRawValue();
  //   console.log(file);
  //   if (file instanceof File || file instanceof Blob) {
  //     console.log('File:', file);

  //     const reader = new FileReader();
  //     reader.readAsArrayBuffer(file);
  //     reader.onload = async () => {
  //       console.log('FileReader onload function called.');
  //       try {
  //         const buffer = reader.result as ArrayBuffer;
  //         const base64Image = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
  //         console.log('Base64 image:', base64Image);
  //         const updates = { name: 'John', bio: 'Hello, world!', photo: base64Image };
  //         const userId = this.auth.idUsuarios();
  //         const updatedProfile = await this.profileService.updateProfile(userId, updates);
  //         console.log('Profile updated:', updatedProfile);
  //       } catch (error) {
  //         console.error('Error in FileReader onload function:', error);
  //       }
  //     };
  //   }
  // }

  // async updateProfile() {
  //   const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  //   const file = fileInput.files && fileInput.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = async () => {
  //       const base64Image = reader.result?.toString().split(',')[1];
  //       const updates = { name: 'John', bio: 'Hello, world!', photo: base64Image };
  //       const userId = this.auth.idUsuarios();
  //       try {
  //         const updatedProfile = await this.profileService.updateProfile(userId, updates);
  //         console.log('Profile updated:', updatedProfile);
  //       } catch (error) {
  //         console.error('Error updating profile:', error);
  //       }
  //     };
  //   }
  // }


