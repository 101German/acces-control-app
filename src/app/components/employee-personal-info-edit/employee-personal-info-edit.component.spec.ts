import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePersonalInfoEditComponent } from './employee-personal-info-edit.component';

describe('EmployeePersonalInfoEditComponent', () => {
  let component: EmployeePersonalInfoEditComponent;
  let fixture: ComponentFixture<EmployeePersonalInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePersonalInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePersonalInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
