import { TestBed } from '@angular/core/testing';

import { AuthBlocksService } from './auth-blocks.service';

describe('AuthBlocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthBlocksService = TestBed.get(AuthBlocksService);
    expect(service).toBeTruthy();
  });
});
