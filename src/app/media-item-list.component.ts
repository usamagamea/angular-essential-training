import { MediaItemService } from './media-item.service';
import { Component, OnInit} from "@angular/core";
import { MediaItem } from "./media-item";



@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export  class MediaItemListComponent  implements OnInit {


  mediaItems:MediaItem[] 
  constructor(private mediaItemService:MediaItemService){}
  ngOnInit(): void {
   this.mediaItemService.get().subscribe(mediaItems=>{
    this.mediaItems = mediaItems
   })
  }
  onDeleteItem(mediaItem:MediaItem){
  // this.delete.emit( this.mediaItemService.delete(mediaItem));
  this.mediaItemService.delete(mediaItem)
}

}

