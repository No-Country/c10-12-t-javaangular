import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalsComponent } from './job-portals.component';

describe('JobPortalsComponent', () => {
  let component: JobPortalsComponent;
  let fixture: ComponentFixture<JobPortalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPortalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
