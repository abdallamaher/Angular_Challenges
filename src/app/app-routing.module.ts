import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Containers

// Guards

/**
 * Add all routes to app-shell component to provide flexibilty for routes
 * with full screen design ( Which doesn't implement reusable
 * navbar like 'login,signup, landing')
 */
const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/core/core.module#CoreModule"
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
