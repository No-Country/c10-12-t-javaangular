import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentsQuestionsComponent } from './frequents-questions.component';

describe('FrequentsQuestionsComponent', () => {
  let component: FrequentsQuestionsComponent;
  let fixture: ComponentFixture<FrequentsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentsQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
