import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// Modules
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";

// Containers
import { NotFoundPageComponent } from "./containers/not-found-page/not-found-page.component";

// Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LayoutComponent } from './containers/layout/layout.component';

const COMPONENTS = [
  NavbarComponent,
  NotFoundPageComponent
];

@NgModule({
  declarations: [...COMPONENTS, LayoutComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CoreRoutingModule],
  exports: [...COMPONENTS, CoreRoutingModule]
})
export class CoreModule {}
