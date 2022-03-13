import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from "../environments/environment.prod";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientJsonpModule } from "@angular/common/http";
// Modules
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from './modules/shared/shared.module';


// NgRx Modules ( State management )
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./ngrx-store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

// Containers
import { AppComponent } from "./components/app-root/app.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { AirlineSerializer } from "./ngrx-store/airline-route-serializer";

// Components

// Directives

const COMPONENTS = [
  AppComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // App Routing Module
    AppRoutingModule,
    SharedModule,
    // NgRx Store for state management
    StoreModule.forRoot(reducers, { metaReducers }),
    // NgRx Effects for async state update
    EffectsModule.forRoot([]),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot({ serializer: AirlineSerializer }),
    // Store Dev tools visual state tracking using Redux Devtools
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    ScrollingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
