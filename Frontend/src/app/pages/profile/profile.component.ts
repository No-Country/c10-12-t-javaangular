import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { DeleteAccountDialogComponent } from 'src/app/components/delete-account-dialog/delete-account-dialog.component';

import { faLocationDot, faPhone, faHashtag, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileModalComponent } from 'src/app/components/profile-modal/profile-modal.component';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  titularAlerta: string = '';
  im:string|undefined;
  Datosprofile: any;

  formularioPerfil: FormGroup;

  meOffert = [];
  hidde = true;
  dateUser = "";
  faFlech = faEye;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faHashtag = faHashtag;

  email: string | undefined;
  img64:string|undefined;
  ngOnInit(): void {
  
    this.email = this.auth.getEmail()
    window.scrollTo({ top: 0 });
    //  let userId = this.auth.idUsuarios();

    if(this.email) {
      swal.fire('Registro exitoso...', this.titularAlerta, 'success');
    } else {
      swal.update({
        icon: 'success'
      })
    }
    
    this.profileService.getPerfil().subscribe(
    {
      next:(data)=>{
        this.Datosprofile=data
       console.log(this.Datosprofile)
      }
    }
    );

    this.auth.setUser().subscribe(data => this.datos = data)

  }

  datos: any;

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




  nombreUsuario() {
    if (this.auth.access_token()) {
      console.log("holasusana")
    }
  }

  // deleteAccount() {
  //   console.log('Acá se elimina tu cuenta');
  //   this.auth.deleteAccount();
  //   this.dialog.open(DeleteAccountDialogComponent);
  // }

  openDialog() {
   /*  this.profileService.updatePerfil(this.datos); */
    const dialogRef = this.dialog.open(ProfileModalComponent);

    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);
    });
  }


 /*  getProfile() {
     this.profileService.getProfile
  }
 */
  updateProfilePhoto() {
/*     const id = this.auth.idUsuarios();
    console.log('elci', id); */
    const foto = this.formularioPerfil.getRawValue();
    // this.profileService.updateProfile(foto, id);
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
         this.im = event.target.result.toString(); 
        console.log(this.im)
    };
    reader.readAsDataURL(file);
  }
  

}


