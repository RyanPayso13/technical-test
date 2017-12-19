import { TestBed, inject } from '@angular/core/testing';

import { MarvelListService } from './marvel-list.service';

describe('MarvelListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelListService]
    });
  });

  it('should be created', inject([MarvelListService], (service: MarvelListService) => {
    expect(service).toBeTruthy();
  }));
});
