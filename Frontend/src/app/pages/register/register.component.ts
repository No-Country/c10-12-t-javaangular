import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faHome, faLaptop, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  form = this.formBuilder.group({
    nombre_apellido: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    agree: [false, [Validators.required]],
  });

  faHome = faHome;
  faLaptop = faLaptop;
  faHeart = faHeart;

  registro: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
    ) {}

  register() {
    if (this.form.valid) {
      const { email, password }:any = this.form.getRawValue();
      this.auth.register(email, password)
      .then(() => {
        this.router.navigate(['/landing'])
      })
      .catch(error => {
        console.error(error)
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}

