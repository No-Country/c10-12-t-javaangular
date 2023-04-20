import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { AuthService } from 'src/app/services/auth.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-couchsurfing-create',
  templateUrl: './couchsurfing-create.component.html',
  styleUrls: ['./couchsurfing-create.component.css']
})
export class CouchsurfingCreateComponent implements OnInit {

  newCouchsurfing: FormGroup = new FormGroup({});

  faPen = faPen;

  constructor(
    private authService: AuthService,
    private alojaminetoService: AlojamientoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newCouchsurfing = this.formBuilder.group(
      {
        user_id: ['default', Validators.required],
        titulo: ['', Validators.required],
        ubicacion: ['', Validators.required],
        descripcion: ['', Validators.required],
        email: ['', Validators.required],
        telefono: [0, Validators.required],
      }
    );
  }

  createCouchsurfing() {
    if (this.newCouchsurfing.valid) {
      const user_id = this.authService.idUsuarios();
      this.newCouchsurfing.patchValue({user_id: user_id});
      this.alojaminetoService.createAlojamiento(this.newCouchsurfing.getRawValue());
    }
  }

}
