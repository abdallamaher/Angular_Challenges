import { AirlineEffects } from './airline.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import * as MyActions from '../actions/airline.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AirlinesApiService } from '../services/airlines-api.service';

describe('My Effects', () => {
  let effects: AirlineEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
        HttpClientTestingModule
      ],
      providers: [
        AirlineEffects,
        provideMockActions(() => actions),
        // other providers
        { provide: AirlinesApiService, useClass: AirlinesApiService }
      ],
    });

    effects = TestBed.get(AirlineEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('loadAirelines$', () => {
    actions = new ReplaySubject(1);
    actions.next(new MyActions.LoadAirlines());

    effects.loadAirlines$.subscribe(result => {
      expect(result).toEqual(new MyActions.AddAirlines({ Airlines: [] }));
    });

  });
});
