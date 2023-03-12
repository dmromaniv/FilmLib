export type FilmsPreviewResponseDTO = {
  Search: FilmPreviewDTO[];
  totalResults: string;
  Response: string;
};

export type FilmDataResponseDTO = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Ratings: IRatings[];
  Genre: string;
  Director: string;
  Writer: string;
  Plot: string;
  Language: string;
  Awards: string;
  Actors: string;
  Country: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
  Poster: string;
};

export interface IRatings {
  Source: string;
  Value: string;
}

export type FilmPreviewDTO = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
