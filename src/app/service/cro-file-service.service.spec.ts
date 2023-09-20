import { TestBed } from '@angular/core/testing';

import { CroFileServiceService } from './cro-file-service.service';

describe('CroFileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CroFileServiceService = TestBed.get(CroFileServiceService);
    expect(service).toBeTruthy();
  });
});
