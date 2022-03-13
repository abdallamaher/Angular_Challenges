// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Containers
import { AirlinesComponent } from './containers/airlines/airlines.component';

// Components
import * as fromAirline from "./state/reducers/airline.reducer";
import { AirlineEffects } from "./state/effects/airline.effects";
import { FilterComponent } from './containers/airlines/components/filter/filter.component';
import { CardsComponent } from './containers/airlines/components/cards/cards.component';


const COMPONENTS = [
  AirlinesComponent,
  FilterComponent,
  CardsComponent
];

const routes: Route[] = [
  {
    path: "",
    component: AirlinesComponent
  }
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("Airlines", fromAirline.reducer),
    EffectsModule.forFeature([AirlineEffects])
  ],
  providers: [ ],
  exports: [...COMPONENTS, RouterModule]
})
export class AirlinesModule {}
