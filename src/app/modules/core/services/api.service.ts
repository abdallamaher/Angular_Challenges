import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "https://www.kayak.com";

  urls = {
    Airlines : `${this.baseUrl}/h/mobileapis/directory/airlines/homework`
  };

  constructor() {
  }


}
