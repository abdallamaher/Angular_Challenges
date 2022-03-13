import * as fromReducer from './airline.reducer';
import {
  LoadAirlines,
  AddAirlines,
  AirlineAdded,
  AirlinesError,
  AirlinesTest
} from './../actions/airline.actions';
import { Airline } from '../../models/Airline.model';

describe('Airlines Reducer', () => {
  describe('initial state', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;

      const action = new AirlinesTest();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('getAllAirlines action', () => {
    it('should update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<Airline> = [
        {
          "site": "https://subus.cl/",
          "code": "SUBUS",
          "alliance": "none",
          "phone": "",
          "name": "SuBús",
          "usName": null,
          "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
          "defaultName": null,
          "logoURL": "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
          "fullLogUrl": "https://www.kayak.com/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
        }
      ];
      const action = new AddAirlines({ Airlines: newState });
      const state = fromReducer.reducer(initialState, action);

      expect(state.data).toEqual(newState);
      expect(state.error).toEqual(null);
    });
  });
});
