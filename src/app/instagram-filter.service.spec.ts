import { TestBed, inject } from '@angular/core/testing';

import { InstagramFilterService } from './instagram-filter.service';

describe('InstagramFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramFilterService]
    });
  });

  it('should ...', inject([InstagramFilterService], (service: InstagramFilterService) => {
    expect(service).toBeTruthy();
  }));
});
