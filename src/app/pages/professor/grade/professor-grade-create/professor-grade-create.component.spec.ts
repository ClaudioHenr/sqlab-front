import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorGradeCreateComponent } from './professor-grade-create.component';

describe('ProfessorGradeCreateComponent', () => {
  let component: ProfessorGradeCreateComponent;
  let fixture: ComponentFixture<ProfessorGradeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorGradeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorGradeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
