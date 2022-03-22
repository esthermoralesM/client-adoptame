import { TestBed } from '@angular/core/testing';

import { AnimalServicioService } from './animal-servicio.service';

describe('AnimalServicioService', () => {
  let service: AnimalServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
