import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { faHome, faLaptop, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.form.controls.email.setValue(email);
      }
    })
    this.local();
    this.login();
  }
  login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.registro.forEach(element => {
         if (email === element['email'] && password === element['password']) {
          this.router.navigate(['/landing'])
        }
        else {
          this.form.markAllAsTouched();
        } 
      });
    }
  }
  local() {
    const registroLocal = localStorage.getItem('registro');
    if (registroLocal) {
      this.registro = JSON.parse(registroLocal);
    }
  }
}
