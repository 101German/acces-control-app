import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkRoomComponent } from './edit-work-room.component';

describe('EditWorkRoomComponent', () => {
  let component: EditWorkRoomComponent;
  let fixture: ComponentFixture<EditWorkRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
