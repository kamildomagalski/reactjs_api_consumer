export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Movie = Omit<
  MovieData,
  'adult' | 'backdrop_path' | 'genre_ids' | 'popularity' | 'title' | 'video' | 'vote_count'
>;
