import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseInfoComponent } from './classe-info.component';

describe('ClasseInfoComponent', () => {
  let component: ClasseInfoComponent;
  let fixture: ComponentFixture<ClasseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
