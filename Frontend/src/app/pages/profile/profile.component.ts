import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { DeleteAccountDialogComponent } from 'src/app/components/delete-account-dialog/delete-account-dialog.component';

import { faLocationDot, faPhone, faHashtag, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileModalComponent } from 'src/app/components/profile-modal/profile-modal.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  meOffert=[];
  hidde = true;
  dateUser="";
  faFlech = faEye;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faHashtag = faHashtag;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {}
  
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.nombreUsuario();
  }

  mostrar() {
    this.hidde = !this.hidde;
  }

  updateProfilePhoto() {
    console.log('Acá iría la nueva foto');
  }

  faUser = faUser;

  

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

}
