import { TestBed } from '@angular/core/testing';

import { ShopBService } from './shop-b.service';

describe('ShopBService', () => {
  let service: ShopBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
