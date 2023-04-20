import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsurfingUpdateComponent } from './couchsurfing-update.component';

describe('CouchsurfingUpdateComponent', () => {
  let component: CouchsurfingUpdateComponent;
  let fixture: ComponentFixture<CouchsurfingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchsurfingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchsurfingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
