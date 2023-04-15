import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCountryComponent } from './no-country.component';

describe('NoCountryComponent', () => {
  let component: NoCountryComponent;
  let fixture: ComponentFixture<NoCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
