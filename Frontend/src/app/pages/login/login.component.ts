import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faPen, faEye, faEyeSlash, faHome, faLaptop, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  registro: [] = [];

  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  faHome = faHome;
  faLaptop = faLaptop;
  faHeart = faHeart;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    if (this.auth.access_token()) {
      this.router.navigate(['/profile']);
    }
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      // this.auth.login(email, password)
      // .then(() => {
      //   this.router.navigate(['/landing']);
      // })
      // .catch(error => {
      //   console.error(error);
      // });

      // Supabase

      this.auth.signIn({email, password});
      this.router.navigate(['/landing']);

    } else {
      this.form.markAllAsTouched();
    }
  }
}
