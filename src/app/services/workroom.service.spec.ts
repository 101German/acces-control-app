import { TestBed } from '@angular/core/testing';

import { WorkroomService } from './workroom.service';

describe('WorkroomService', () => {
  let service: WorkroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
