import { TestBed } from '@angular/core/testing';

import { ArtableService } from './artable.service';

describe('ArtableService', () => {
  let service: ArtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
