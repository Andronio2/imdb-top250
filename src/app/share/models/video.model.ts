export interface ITopVideos {
  items: IVideo[];
  errorMessage: string;
}

export interface IVideo {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}
