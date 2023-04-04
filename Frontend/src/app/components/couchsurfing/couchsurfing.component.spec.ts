import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingComponent } from './couchsurfing.component';

describe('CouchsurfingComponent', () => {
  let component: CouchsurfingComponent;
  let fixture: ComponentFixture<CouchsurfingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
