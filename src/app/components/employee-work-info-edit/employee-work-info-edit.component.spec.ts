import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWorkInfoEditComponent } from './employee-work-info-edit.component';

describe('EmployeeWorkInfoEditComponent', () => {
  let component: EmployeeWorkInfoEditComponent;
  let fixture: ComponentFixture<EmployeeWorkInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWorkInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWorkInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
