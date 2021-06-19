import { TestBed } from '@angular/core/testing';

import { NocacheInterceptor } from './nocache.interceptor';

describe('NocacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NocacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NocacheInterceptor = TestBed.inject(NocacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
