import { MediaItemListComponent } from "./media-item-list.component";
import { Routes, RouterModule } from "@angular/router";

const appRouting: Routes = [
  {
    path: "add",
    loadChildren: () => import('./new-item/new-item.module').then(lazy=>lazy.NewItemModule)
  },
  { path: ":medium", component: MediaItemListComponent },
  { path: "", pathMatch: "full", redirectTo: "/all" },
];

export const Routing = RouterModule.forRoot(appRouting);
