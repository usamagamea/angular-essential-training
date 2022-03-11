import { MediaItem, MediaItemResponse } from "./media-item";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators"

@Injectable({
    providedIn:'root'
})
export class MediaItemService {


    Items:MediaItem[] = [
        {
          id: 1,
          name: "Firebug",
          medium: "Series",
          category: "Science Fiction",
          year: 2010,
          watchedOn: '12/10/16',
          isFavorite: false,
        },
        {
          id: 2,
          name: "The Small Tall",
          medium: "Movies",
          category: "Comedy",
          year: 2015,
          watchedOn: '3/10/16',
          isFavorite: true,
        },
        {
          id: 3,
          name: "Godfather",
          medium: "Series",
          category: "Drama",
          year: 1972,
          watchedOn: null,
          isFavorite: false,
        },
        {
          id: 4,
          name: "The Matrix",
          medium: "Movies",
          category: "Action",
          year: 1999,
          watchedOn: null,
          isFavorite: true,
        },
        {
          id: 5,
          name: "The Notebook",
          medium: "Series",
          category: "Romance",
          year: 2004,
          watchedOn: null,
          isFavorite: true,
        },
      ];

    constructor(private http:HttpClient){}  
      get(){
          // return this.mediaItems

         
          return this.http.get<MediaItemResponse>('media').pipe(map(Response=>{return Response.mediaItems})) 

      }
      add(mediaItem:MediaItem){
     this.Items.push(mediaItem)
      }
      delete(mediaItem:MediaItem){
          const Index = this.Items.indexOf(mediaItem)
          if(Index >=0){
              this.Items.splice(Index , 1)
          }
      } 
}