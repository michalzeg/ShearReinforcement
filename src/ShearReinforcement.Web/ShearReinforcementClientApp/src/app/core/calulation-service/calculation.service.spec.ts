import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { HttpService } from '../Http/http.service';

describe('CalculationService', () => {
  let httpService: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    httpService = jasmine.createSpyObj('HttpService', ['getResults']);

    TestBed.configureTestingModule({
      providers: [
        CalculationService, { provide: HttpService, useValue: httpService }
      ]
    });
  });

  it('should be created', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service).toBeTruthy();
  });
});
