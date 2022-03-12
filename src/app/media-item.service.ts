import { MediaItem, MediaItemResponse } from "./media-item";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MediaItemService {
  // Items: MediaItem[] = [
  //   {
  //     id: 1,
  //     name: "Firebug",
  //     medium: "Series",
  //     category: "Science Fiction",
  //     year: 2010,
  //     watchedOn: "12/10/16",
  //     isFavorite: false,
  //   },
  //   {
  //     id: 2,
  //     name: "The Small Tall",
  //     medium: "Movies",
  //     category: "Comedy",
  //     year: 2015,
  //     watchedOn: "3/10/16",
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Godfather",
  //     medium: "Series",
  //     category: "Drama",
  //     year: 1972,
  //     watchedOn: null,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 4,
  //     name: "The Matrix",
  //     medium: "Movies",
  //     category: "Action",
  //     year: 1999,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 5,
  //     name: "The Notebook",
  //     medium: "Series",
  //     category: "Romance",
  //     year: 2004,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  // ];

  constructor(private http: HttpClient) {}
  get(medium: string) {
    const getOptions = {
      params: { medium },
    };
    return this.http.get<MediaItemResponse>("media").pipe(
      map((Response, getOptions) => {
        console.log(Response);
        return Response.mediaItems;
       
      }),
      catchError(this.handleError)
    );
  }
  add(mediaItem: MediaItem) {
    //  this.Items.push(mediaItem)
    return this.http
      .post<MediaItemResponse>("media", mediaItem)
      .pipe(catchError(this.handleError));
  }
  delete(mediaItem: MediaItem) {
    // const Index = this.Items.indexOf(mediaItem);
    // if (Index >= 0) {
    //   this.Items.splice(Index, 1);
    // }
    return this.http
      .delete(`media/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError("A data error occurred , please try again ");
  }
}
