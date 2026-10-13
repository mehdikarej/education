import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNotesComponent } from './courses-notes.component';

describe('CoursesNotesComponent', () => {
  let component: CoursesNotesComponent;
  let fixture: ComponentFixture<CoursesNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
