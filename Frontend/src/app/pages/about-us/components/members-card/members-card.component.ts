import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent {

  @Input() member: any; 

}
