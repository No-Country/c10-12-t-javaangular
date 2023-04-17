import { Component } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';
import { Router } from '@angular/router';

import { TermsConditionComponent } from '../../pages/terms-condition/terms-condition.component';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faHeart = faHeart;

}
