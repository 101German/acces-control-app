import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRequestFormComponent } from './dialog-request-form.component';

describe('DialogRequestFormComponent', () => {
  let component: DialogRequestFormComponent;
  let fixture: ComponentFixture<DialogRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
