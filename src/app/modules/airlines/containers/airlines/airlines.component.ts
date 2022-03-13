import { Observable, Subscription } from 'rxjs';
import { FilterConfiguration } from './../../models/filterConfiguration.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FilterItem } from '../../models/filterItem.model';
import * as AirlinesActions from "../../state/actions/airline.actions";
import * as fromAirLinesState from '../../state/selectors/airlines.selector'
import { parse } from 'querystring';
import { Airline } from '../../models/Airline.model';
@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  filterConfiguration: FilterConfiguration;
  airLinesList: Array<Airline>;
  sub: Subscription;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.filterConfiguration = {
      "startIdx": 0,
      "OW": false,
      "ST": false,
      "SA": false,
    }
    this.airLinesList = [];
    this.store.dispatch(new AirlinesActions.LoadAirlines)
    this.loadMore();
  };


  filter(value) {
    this.filterConfiguration[value] = !this.filterConfiguration[value];
    this.filterConfiguration.startIdx = 0;
    this.airLinesList = [];
    this.loadMore();
  }

  loadMore(): void {
    this.filterConfiguration = JSON.parse(JSON.stringify(this.filterConfiguration))
    this.sub = this.store.select(fromAirLinesState.getAirlinesPage, this.filterConfiguration).subscribe(
      page => {
        this.airLinesList = [...this.airLinesList, ...page.arlineData];
        this.filterConfiguration.startIdx = page.arlineIdx;
      },
      error => Observable.throw(error)
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
