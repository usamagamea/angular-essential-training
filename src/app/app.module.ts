import { MockXHRBackend } from "./mock-xhr-backend";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from "./media-item-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { lookupLists, lookupListToken } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { Routing } from "./app.routing";


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ,  Routing],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe,
  
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
})
export class AppModule {}
