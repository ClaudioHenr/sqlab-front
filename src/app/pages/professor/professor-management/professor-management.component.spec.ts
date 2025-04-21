import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorManagementComponent } from './professor-management.component';

describe('ProfessorManagementComponent', () => {
  let component: ProfessorManagementComponent;
  let fixture: ComponentFixture<ProfessorManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
