import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingDeleteComponent } from './couchsurfing-delete.component';

describe('CouchsurfingDeleteComponent', () => {
  let component: CouchsurfingDeleteComponent;
  let fixture: ComponentFixture<CouchsurfingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
