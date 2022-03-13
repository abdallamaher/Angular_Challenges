import * as fromSelectors from './airlines.selector';
import { Airline } from '../../models/Airline.model';
import { AirlinesState } from '../reducers/Airline.reducer';

describe('Selectors', () => {
  it('should select the with the filterConfiguration', () => {

    const initialState: AirlinesState = {
      data: [
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
        },
        {
          "site": "https://subus.cl/",
          "code": "SUBUS",
          "alliance": "OW",
          "phone": "",
          "name": "SuBús",
          "usName": null,
          "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
          "defaultName": null,
          "logoURL": "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
          "fullLogUrl": "https://www.kayak.com/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
        }
      ],
      error: null
    };
    const filterConfiguration = {
      "startIdx": 0,
      "OW": true,
      "ST": false,
      "SA": false,
    }
    const result = fromSelectors.getAirlinesPage.projector(initialState, filterConfiguration);
    expect(result.arlineData.length).toEqual(1);
    expect(result.arlineData[0].alliance).toEqual("OW");
  });
});
