import { LayoutComponent } from './containers/layout/layout.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

// Containers


const routes: Route[] = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "airlines",
        pathMatch: "full"
      },
      {
        path: "airlines",
        loadChildren: "./../airlines/airlines.module#AirlinesModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
