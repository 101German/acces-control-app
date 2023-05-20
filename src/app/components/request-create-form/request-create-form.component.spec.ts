import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreateFormComponent } from './request-create-form.component';

describe('RequestCreateFormComponent', () => {
  let component: RequestCreateFormComponent;
  let fixture: ComponentFixture<RequestCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
