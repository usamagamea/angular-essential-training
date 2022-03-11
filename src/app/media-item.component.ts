import { MediaItemService } from "./media-item.service";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MediaItem } from "./media-item";

@Component({
  selector: "mw-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
})
export class MediaItemComponent {
  @Input("mediaItemToWatch") mediaItem: MediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log("Deleting item:" + this.mediaItem.name);
    this.delete.emit(this.mediaItem);
  }
}
