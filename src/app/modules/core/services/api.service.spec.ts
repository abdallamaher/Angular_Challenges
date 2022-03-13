/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: Api', () => {
  let service: ApiService;
  beforeEach(() => {
    service = new ApiService;
  });

  it('#urls.Airlines should contain fullUrl ', () => {
    service.baseUrl = "https://www.kayak.com";
    expect(service.urls.Airlines).toEqual("https://www.kayak.com/h/mobileapis/directory/airlines/homework")
  });

  it('#urls.Airlines should not contain only the baseUrl ', () => {
    service.baseUrl = "https://www.kayak.com";
    expect(service.urls.Airlines).not.toEqual("https://www.kayak.com")
  });
});
