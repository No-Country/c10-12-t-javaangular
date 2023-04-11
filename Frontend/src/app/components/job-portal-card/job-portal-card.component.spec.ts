import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalCardComponent } from './job-portal-card.component';

describe('JobPortalCardComponent', () => {
  let component: JobPortalCardComponent;
  let fixture: ComponentFixture<JobPortalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPortalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPortalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
