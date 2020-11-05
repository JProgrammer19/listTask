import { TestBed } from '@angular/core/testing';

import { ListadoserviceService } from './listadoservice.service';

describe('ListadoserviceService', () => {
  let service: ListadoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
