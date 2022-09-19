import { TestBed } from '@angular/core/testing';

import { CategoryTestApiService } from './category-test-api.service';

describe('CategoryTestApiService', () => {
  let service: CategoryTestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryTestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
