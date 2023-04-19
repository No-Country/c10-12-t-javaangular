import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  emailForm: FormGroup = new FormGroup({});
  codeForm: FormGroup = new FormGroup({});

  email: boolean = false;
  canSubmitEmail: boolean | undefined;
  
  segundos: number = 0;
  minutos: number = 2;
  interval: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {}
  
  ngOnInit(): void {
    this.emailForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
    });
    this.codeForm = this.formBuilder.nonNullable.group({
      code: [, [Validators.required]],
    });
  }

  submitEmail() {
    this.minutos = 2;
    this.canSubmitEmail = false;
    this.email = true;
    this.interval = setInterval(() => {
      if (this.segundos > 0) {
        this.segundos--;
      } else if (this.minutos > 0) {
        this.minutos--;
        this.segundos = 59;
      } else {
        clearInterval(this.interval);
        this.canSubmitEmail = true;
      }
    }, 1000);
  }

}
