import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faHome, faLaptop, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProfileService } from 'src/app/services/profile.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  titularAlerta: string = '';

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    agree: [false, [Validators.required]],
  });

  faHome = faHome;
  faLaptop = faLaptop;
  faHeart = faHeart;

  registro: any[] = [];


  profileData: Object = {
    user_id:'',
    name: '',
    lastname: '',
    country: '',
    description: '',
    phone: 0,
    instagram: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    if (this.auth.access_token()) {
      this.router.navigate(['/profile']);
    }
  }

  submitProfile() {
    // this.profileService.submitProfile(this.profileData)
  }

  register() {
    
    if (this.form.valid) {
      const { email, password }:any = this.form.getRawValue();
      this.auth.signUp({email, password}).then(() => {
        swal.fire('Registro exitoso...', this.titularAlerta, 'success');
        let id = this.auth.idUsuarios();
        let user_id = {
          "user_id": id
        }
        this.profileService.AutoCreateProfile(user_id);
      }).then(() => {
        this.router.navigate(['/profile'])
      }).catch((error) => {
      });

    } else {
      this.form.markAllAsTouched();
    }
  }

}
