import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/modules/core/services/api.service";
import { Observable, of } from "rxjs";
import { Airline } from "../../models/Airline.model";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AirlinesApiService {
  baseAirlinesUrl;
  headers = {};

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {
    this.baseAirlinesUrl = this.api.urls.Airlines;
  }

  getAirlines(): Observable<Airline[]> {
    return this.http.jsonp<Airline[]>(this.baseAirlinesUrl, "jsonp").pipe(
      catchError(this.handleError<Airline[]>('getAllAireLines', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

}
