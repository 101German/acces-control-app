import { TestBed } from '@angular/core/testing';

import { ConvertEnumToStringHelperService } from './convert-enum-to-string-helper.service';

describe('ConvertEnumToStringHelperService', () => {
  let service: ConvertEnumToStringHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertEnumToStringHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
