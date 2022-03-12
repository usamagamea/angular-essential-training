// import { NewItemModule } from './new-item/new-item.module';
import { MockXHRBackend } from "./mock-xhr-backend";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { FormsModule} from "@angular/forms";
import { lookupLists, lookupListToken } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { Routing } from "./app.routing";



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule
    // ,
    // NewItemModule
    , 
    Routing],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
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
