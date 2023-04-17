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

  errorMessage: boolean = false;

  async login() {
    if (this.form.valid) {
        try {
        const { email, password } = this.form.getRawValue();
        return await this.auth.signIn({ email: email, password: password })

      } catch (error) {
        console.log(error)
        this.errorMessage = true;
        console.log(this.errorMessage)
      }

    } else {
      this.form.markAllAsTouched();
    }
  }
}
