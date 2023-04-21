import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faLocationDot, faMobile, faUserGroup, faBed, faBriefcase, faCalendarDays, faPen } from '@fortawesome/free-solid-svg-icons';
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

  faPen = faPen;
  faLocation = faLocationDot;
  faMobile = faMobile;
  faUserGroup = faUserGroup;
  faBed = faBed;
  faBriefcase = faBriefcase;
  faCalendarDays = faCalendarDays;

  titularAlerta: string = '';
  im: string | undefined;
  profileData: any | undefined = undefined;

  formularioPerfil: FormGroup;
  datos: any;

  img64: string | undefined;

  couchsurfingDisplay: boolean = true;
  jobsDisplay: boolean = false;
  eventsDisplay: boolean = false;

  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.formularioPerfil = new FormGroup({
      photo: new FormControl('')
    });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });   

    this.profileService.getPerfil().subscribe({
      next: (data: any) => {
        if (data == null) {
          console.log('data vacia')
        } else {
          this.profileData = data[0];
        }
      }
    });

    this.auth.setUser().subscribe(data => {
      this.datos = data;
    });

  }

  showCouchsurfing() {
    this.couchsurfingDisplay = true;
    this.jobsDisplay = false;
    this.eventsDisplay = false;
  }

  showJobs() {
    this.couchsurfingDisplay = false;
    this.jobsDisplay = true;
    this.eventsDisplay = false;
  }

  showEvents() {
    this.couchsurfingDisplay = false;
    this.jobsDisplay = false;
    this.eventsDisplay = true;
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

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }

}


