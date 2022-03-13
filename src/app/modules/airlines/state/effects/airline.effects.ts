import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as fromAirline from "../actions/airline.actions";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError } from "rxjs/operators";
import { AirlinesApiService } from "../services/airlines-api.service";
import { Airline } from "./../../models/Airline.model";
import { ApiService } from "src/app/modules/core/services/api.service";

@Injectable()
export class AirlineEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private airlinesApi: AirlinesApiService
  ) { }

  // Load airlines
  @Effect()
  loadAirlines$: Observable<Action> = this.actions$.pipe(
    ofType(fromAirline.AirlineActionTypes.LoadAirlines),
    switchMap((action: fromAirline.LoadAirlines) => {
      return this.airlinesApi.getAirlines().pipe(
        map((item: Array<Airline>) => {
          item.forEach((element: Airline) => {
            element.fullLogUrl = this.api.baseUrl + element.logoURL
          });
          return item;
        }),
        switchMap((res: Array<Airline>) => {
          return [
            new fromAirline.AddAirlines({ Airlines: res }),
          ];
        }),
        catchError(err => {
          return of(new fromAirline.AirlinesError(err));
        })
      );
    })
  );

}
