import { FilterConfiguration } from '../../models/filterConfiguration.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  AirlinesState
} from "../reducers/Airline.reducer";
import { Airline } from "../../models/airline.model";

const AirlinesState = createFeatureSelector<AirlinesState>("Airlines");



// Get Airline Errors
export const getAirlinesErrors = createSelector(
  AirlinesState,
  (state: AirlinesState) => state.error
);


// Get Airlines
export const getAirlinesPage = createSelector(
  AirlinesState,
  (state: AirlinesState, filterConfiguration: FilterConfiguration): any => {
    let res = [];
    let arlineIdx = filterConfiguration.startIdx;
    for (arlineIdx; arlineIdx < state.data.length && res.length < 50; arlineIdx++) {
      if (filterConfiguration["OW"] == false &&
        filterConfiguration["ST"] == false &&
        filterConfiguration["SA"] == false) {

        res.push(state.data[arlineIdx]);
      }
      else if (filterConfiguration[state.data[arlineIdx].alliance]) {
        res.push(state.data[arlineIdx]);
      }
    }
    const result = {
      'arlineData': res,
      arlineIdx
    }
    return result;
  }
);
