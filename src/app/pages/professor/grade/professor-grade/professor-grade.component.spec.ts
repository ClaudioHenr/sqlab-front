import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorGradeComponent } from './professor-grade.component';

describe('ProfessorGradeComponent', () => {
  let component: ProfessorGradeComponent;
  let fixture: ComponentFixture<ProfessorGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
