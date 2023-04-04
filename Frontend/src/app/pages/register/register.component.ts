import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faHome, faLaptop, faHeart } from '@fortawesome/free-solid-svg-icons';

interface Registro {
  nombre: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    nombre_apellido: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  faHome = faHome;
  faLaptop = faLaptop;
  faHeart = faHeart;

  registro: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }
  onSubmit() {
    const newRegistro = this.form.value;
    this.registro.push(newRegistro);
    localStorage.setItem('registro', JSON.stringify(this.registro));
    this.router.navigate(['/landing']);
  }

}

