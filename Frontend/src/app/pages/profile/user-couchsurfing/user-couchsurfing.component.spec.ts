import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCouchsurfingComponent } from './user-couchsurfing.component';

describe('UserCouchsurfingComponent', () => {
  let component: UserCouchsurfingComponent;
  let fixture: ComponentFixture<UserCouchsurfingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCouchsurfingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCouchsurfingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
