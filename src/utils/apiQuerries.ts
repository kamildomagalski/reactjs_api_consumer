import { Movie, MovieData } from '../types/types';
import { History } from 'history';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (history: History): Promise<Movie[] | undefined> => {
  try {
    const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    type JSONResponse = {
      page: number;
      results: MovieData[];
      total_pages: number;
      total_results: number;
    };
    if (response.ok) {
      const data: JSONResponse = await response.json();

      return data.results.map((result: Movie) => {
        const { id, original_language, original_title, overview, poster_path, release_date, vote_average } = result;
        const preparedData: Movie = {
          id,
          original_language,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average,
        };
        return preparedData;
      });
    } else {
      history.replace(`/${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
