import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingCreateComponent } from './couchsurfing-create.component';

describe('CouchsurfingCreateComponent', () => {
  let component: CouchsurfingCreateComponent;
  let fixture: ComponentFixture<CouchsurfingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
