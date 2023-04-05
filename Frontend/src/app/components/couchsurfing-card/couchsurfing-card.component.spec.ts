import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingCardComponent } from './couchsurfing-card.component';

describe('CouchsurfingCardComponent', () => {
  let component: CouchsurfingCardComponent;
  let fixture: ComponentFixture<CouchsurfingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
