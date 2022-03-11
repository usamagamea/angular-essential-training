export interface MediaItem {
  id: number;
  name: string;
  medium?: string;
  category: string;
  year: number;
  watchedOn: string;
  isFavorite: boolean;
}

export interface MediaItemResponse {
  mediaItems: MediaItem[];
}
