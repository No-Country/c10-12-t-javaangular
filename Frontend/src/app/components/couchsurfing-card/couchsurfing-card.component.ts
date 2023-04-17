import { Component, Input } from '@angular/core';
import { faLocationDot, faEllipsisVertical, faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-couchsurfing-card',
  templateUrl: './couchsurfing-card.component.html',
  styleUrls: ['./couchsurfing-card.component.css']
})
export class CouchsurfingCardComponent {

  @Input() hosting!: any;

  faLocationDot = faLocationDot;
  faEllipsisVertical = faEllipsisVertical;
  faPen = faPen;
  faCircleXmark = faCircleXmark;

  isUserPost: boolean = true;
  editDeleteControls: boolean = false;


  openDialog() {
  }

  deleteOffer() {
  }

  editDeleteToggle() {
    this.editDeleteControls = !this.editDeleteControls
  }

}

