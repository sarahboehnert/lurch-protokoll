import { TestBed } from '@angular/core/testing';

import { BasisdatenService } from './basisdaten.service';

describe('BasisdatenService', () => {
  let service: BasisdatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasisdatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
