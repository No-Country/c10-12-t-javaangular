import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couchsurfing',
  templateUrl: './couchsurfing.component.html',
  styleUrls: ['./couchsurfing.component.css']
})
export class CouchsurfingComponent implements OnInit {

  items: number = 6;

  ngOnInit(): void {
  }
  
}
