import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePassPageComponent } from './employee-pass-page.component';

describe('EmployeePassPageComponent', () => {
  let component: EmployeePassPageComponent;
  let fixture: ComponentFixture<EmployeePassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePassPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
