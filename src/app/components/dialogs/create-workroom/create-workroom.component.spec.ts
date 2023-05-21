import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkroomComponent } from './create-workroom.component';

describe('CreateWorkroomComponent', () => {
  let component: CreateWorkroomComponent;
  let fixture: ComponentFixture<CreateWorkroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
