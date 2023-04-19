import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletitasComponent } from './galletitas.component';

describe('GalletitasComponent', () => {
  let component: GalletitasComponent;
  let fixture: ComponentFixture<GalletitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalletitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalletitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
