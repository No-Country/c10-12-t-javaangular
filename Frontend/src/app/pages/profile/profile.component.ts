import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { DeleteAccountDialogComponent } from 'src/app/components/delete-account-dialog/delete-account-dialog.component';

import { faLocationDot, faPhone, faHashtag, faEye, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  hidde = true;
  dateUser="";
  faFlech = faEye;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faHashtag = faHashtag;

  mostrar() {
    this.hidde = !this.hidde;
  }



  updateProfilePhoto() {
    console.log('Acá iría la nueva foto');
  }

  faUser = faUser;

  // user$ = this.auth.authState$.pipe(
  //   filter(state => state ? true : false)
  // );

  // user: User | null = null;
  // user$: Observable<{ user: User | null }>;

  // ngOnInit(): void {
  //   this.auth.user$.subscribe(user => {
  //     this.user = user.user;
  //   });
  //   //
  //   this.auth.user$.subscribe((userData) => {
  //     this.user = userData.user;
  //     console.log('ngOnInit de navbar',userData)
  //   });
  //   this.auth.userSubject.subscribe(user => {
  //     this.user = user;
  //     console.log('desde navbar component', this.user)
  //   });
  //   console.log('navbar res', this.user)
  // }

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.nombreUsuario();
    this.dateUser=this.auth.datosUsuarios();
    console.log(this.auth.datosUsuarios())
  }

  // async logout() {
  //   await this.auth.logout();
  //   this.router.navigate(['/login']);
  //   location.reload();
  // }

  nombreUsuario(){
    if(this.auth.access_token()){
      console.log("holasusana")
    }
  }

  deleteAccount() {
    console.log('Acá se elimina tu cuenta');
    this.dialog.open(DeleteAccountDialogComponent);
  }
}
