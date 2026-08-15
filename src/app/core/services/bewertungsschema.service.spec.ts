import { TestBed } from '@angular/core/testing';

import { BewertungsschemaService } from './bewertungsschema.service';

describe('Bewertungsschema', () => {
  let service: BewertungsschemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BewertungsschemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
