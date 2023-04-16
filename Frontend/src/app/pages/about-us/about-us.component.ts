import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {
    this.elRef.nativeElement.ownerDocument.body.scrollTop = 0;
  }

}
