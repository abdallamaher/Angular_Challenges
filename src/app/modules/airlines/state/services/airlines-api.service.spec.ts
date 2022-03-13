import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';

import { of } from 'rxjs';
import { ApiService } from 'src/app/modules/core/services/api.service';
import { AirlinesApiService } from './airlines-api.service';

class MockMyService {
  submitForm() {
    return of({ jsonp: "jsonp" });
  }
}

describe('Airlines ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: AirlinesApiService;

  const mockServiceData = {
    jsonp: "jsonp"
  }

  const mailChimpEndpoint =
    'https://www.kayak.com/h/mobileapis/directory/airlines/homework';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AirlinesApiService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = new AirlinesApiService(httpClient, new ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: AirlinesApiService = TestBed.get(AirlinesApiService);
    expect(service).toBeTruthy();
  });

  it('check subscribeEmail function has been called in service', () => {
    const service = TestBed.get(AirlinesApiService);
    service.getAirlines(`https://www.kayak.com/h/mobileapis/directory/airlines/homework`).subscribe(
      response => {
        console.log(response)
        expect(response).toEqual(mockServiceData);
      }
    )

    const reqMock = httpTestingController.expectOne(req => req.url === mailChimpEndpoint);
    expect(reqMock.request.method).toBe('JSONP');
    reqMock.flush(mockServiceData);
  });

});
