import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient,
        BackendService
      ]
    });
  });

  it('should be created', inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  }));
});
