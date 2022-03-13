import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Airline } from "./../../models/airline.model";
import { AirlineActions, AirlineActionTypes } from "../actions/airline.actions";

export interface AirlinesState {
  data: Array<Airline>,
  error: null | string;
}


export const initialState: AirlinesState = {
  data: [],
  error: null
};

export function reducer(
  state = initialState,
  action: AirlineActions
): AirlinesState {
  switch (action.type) {

    case AirlineActionTypes.AddAirlines: {
      return { ...state, data: action.payload.Airlines }
    }

    case AirlineActionTypes.AirlinesError: {
      return { ...state, error: action.payload }
    }

    default: {
      return state;
    }

  }
}

