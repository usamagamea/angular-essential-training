import { MediaItemListComponent } from "./media-item-list.component";
import { MediaItemFormComponent } from "./media-item-form.component";
import { Routes, RouterModule } from "@angular/router";

const appRouting: Routes = [
  { path: "add", component: MediaItemFormComponent },
  { path: ":medium", component: MediaItemListComponent },
  { path: "", pathMatch: "full", redirectTo: "/all" },
];

export const Routing = RouterModule.forRoot(appRouting);
