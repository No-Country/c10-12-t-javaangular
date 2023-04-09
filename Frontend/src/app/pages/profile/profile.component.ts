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

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
    location.reload();
  }

  deleteAccount() {
    console.log('Acá se elimina tu cuenta');
    this.dialog.open(DeleteAccountDialogComponent);
  }
}
