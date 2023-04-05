import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingAdComponent } from './couchsurfing-ad.component';

describe('CouchsurfingAdComponent', () => {
  let component: CouchsurfingAdComponent;
  let fixture: ComponentFixture<CouchsurfingAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
