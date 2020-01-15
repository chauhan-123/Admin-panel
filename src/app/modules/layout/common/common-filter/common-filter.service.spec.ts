import { TestBed } from '@angular/core/testing';

import { CommonFilterService } from './common-filter.service';

describe('CommonFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFilterService = TestBed.get(CommonFilterService);
    expect(service).toBeTruthy();
  });
});
