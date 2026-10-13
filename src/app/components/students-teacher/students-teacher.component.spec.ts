import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTeacherComponent } from './students-teacher.component';

describe('StudentsTeacherComponent', () => {
  let component: StudentsTeacherComponent;
  let fixture: ComponentFixture<StudentsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
