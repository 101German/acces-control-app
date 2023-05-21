import { TestBed } from '@angular/core/testing';

import { WorkInfoService } from './work-info.service';

describe('WorkInfoService', () => {
  let service: WorkInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
