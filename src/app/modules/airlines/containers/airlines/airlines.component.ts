import { Airline } from './../../models/airline.model';
import { Observable, Subscription } from 'rxjs';
import { FilterConfiguration } from './../../models/filterConfiguration.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AirlinesActions from "../../state/actions/airline.actions";
import * as fromAirLinesState from '../../state/selectors/airlines.selector'


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
