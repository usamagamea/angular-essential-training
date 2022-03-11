import { Component } from "@angular/core";
import { MediaItem } from "./media-item";
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "app";
    // firstItemMedia:MediaItem = {
    //     id: 1,
    //     name: "The Redemption",
    //     medium: "DVD",
    //     category: "Action",
    //     year: 2010,
    //     watchedOn: 'watchedOn 13/2/2018',
    //     isFavorite: false
    // };
    onDeleteItem(mediaItem:MediaItem){

    }
}