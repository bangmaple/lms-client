import { TestBed } from '@angular/core/testing';

import { AuthValidatorService } from './auth-validator.service';

describe('AuthValidatorService', () => {
  let service: AuthValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
