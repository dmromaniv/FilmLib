export interface IFilmInfo {
  Title: string;
  Year: string;
  Ratings: IRatings[];
  Actors: string;
  Country: string;
  Director: string;
  Genre: string;
  [key: string]: any;
}

export interface IRatings {
  Source: string;
  Value: string;
}
