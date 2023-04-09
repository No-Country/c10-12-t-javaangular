import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.css']
})
export class DeleteAccountDialogComponent {

  constructor(
    private router: Router
  ) {}

  deleteAccount() {
    console.log('Listo, se ha eliminado tu account');
    this.router.navigate(['/register']);
  }

}
