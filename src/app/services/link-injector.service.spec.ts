import { TestBed } from '@angular/core/testing';

import { LinkInjectorService } from './link-injector.service';

describe('LinkServiceService', () => {
  let service: LinkInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
