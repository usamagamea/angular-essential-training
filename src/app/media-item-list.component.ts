import { MediaItemService } from "./media-item.service";
import { Component, Input, OnInit } from "@angular/core";
import { MediaItem } from "./media-item";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export class MediaItemListComponent implements OnInit {
 
  medium = "";
  mediaItems: MediaItem[];

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.mediaItemService.get().subscribe((mediaItems) => {
    //   this.mediaItems = mediaItems;
    // });

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // let medium = params["medium"];
      let medium = paramMap.get("medium");
      if (medium.toLowerCase() === "all") medium = "";
      this.getMediaItems(medium);
      console.log(medium);
    });
    // this.getMediaItems(this.medium);
  }
  onDeleteItem(mediaItem: MediaItem) {
    // this.delete.emit( this.mediaItemService.delete(mediaItem));
    this.mediaItemService.delete(mediaItem).subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }
  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItems = [];

    this.mediaItemService.get(medium).subscribe((mediaItems) => {
      if (medium === "all" || medium == "") {
        this.mediaItems = mediaItems;
      } else {
        this.mediaItems = mediaItems.filter((mediaItem) => {
          return mediaItem.medium === medium;
        });
      }
    });
  }
}
