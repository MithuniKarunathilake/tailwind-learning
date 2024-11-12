import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePatientComponent } from './manage-patient.component';

describe('ManagePatientComponent', () => {
  let component: ManagePatientComponent;
  let fixture: ComponentFixture<ManagePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
