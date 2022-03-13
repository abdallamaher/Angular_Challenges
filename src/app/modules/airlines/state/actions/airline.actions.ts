import { Action } from "@ngrx/store";
import { Airline } from "./../../models/Airline.model";

export enum AirlineActionTypes {
  LoadAirlines = "[Airlines] Load Airlines",
  AddAirlines = "[Airlines] Add Airlines",
  AirlineAdded = "[Airlines] Added Airlines",
  AirlinesError = "[Airlines] Error",
  AirlinesTest = "[Airlines] Test"
}

export class LoadAirlines implements Action {
  readonly type = AirlineActionTypes.LoadAirlines;

  constructor() { }
}

export class AddAirlines implements Action {
  readonly type = AirlineActionTypes.AddAirlines;

  constructor(public payload: { Airlines: Airline[] }) { }
}

export class AirlineAdded implements Action {
  readonly type = AirlineActionTypes.AirlineAdded;

  constructor(public payload: { Airline: Airline }) { }
}

export class AirlinesError implements Action {
  readonly type = AirlineActionTypes.AirlinesError;
  constructor(public payload: string) { }
}

export class AirlinesTest implements Action {
  readonly type = AirlineActionTypes.AirlinesTest;
  constructor() { }
}

export type AirlineActions =
  | LoadAirlines
  | AddAirlines
  | AirlineAdded
  | AirlinesError
  | AirlinesTest;
