import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFacesComponent } from './employee-faces.component';

describe('EmployeeFacesComponent', () => {
  let component: EmployeeFacesComponent;
  let fixture: ComponentFixture<EmployeeFacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
