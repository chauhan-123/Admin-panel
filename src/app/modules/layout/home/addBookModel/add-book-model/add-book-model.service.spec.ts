import { TestBed } from '@angular/core/testing';

import { AddBookModelService } from './add-book-model.service';

describe('AddBookModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBookModelService = TestBed.get(AddBookModelService);
    expect(service).toBeTruthy();
  });
});
