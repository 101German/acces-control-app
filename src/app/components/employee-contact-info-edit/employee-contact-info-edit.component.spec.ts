import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactInfoEditComponent } from './employee-contact-info-edit.component';

describe('EmployeeContactInfoEditComponent', () => {
  let component: EmployeeContactInfoEditComponent;
  let fixture: ComponentFixture<EmployeeContactInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeContactInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeContactInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
