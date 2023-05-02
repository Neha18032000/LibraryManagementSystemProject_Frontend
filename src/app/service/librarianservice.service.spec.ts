import { TestBed } from '@angular/core/testing';

import { LibrarianserviceService } from './librarianservice.service';

describe('LibrarianserviceService', () => {
  let service: LibrarianserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarianserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
