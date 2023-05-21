import { TestBed } from '@angular/core/testing';

import { RegisterInfoService } from './register-info.service';

describe('RegisterInfoService', () => {
  let service: RegisterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
