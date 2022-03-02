import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import { BUTTON_GET_RANDOM_MOVIES } from '../../helpers/constans';
import { getPopularMovies } from '../../utils/apiQuerries';
import { Movie } from '../../types/types';

import styles from './movieList.module.scss';

interface Props {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export default function MovieList({ ...props }: Props): JSX.Element {
  const { movies, setMovies } = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const handleGetMovies = async () => {
    const results = await getPopularMovies();
    if (results) setMovies(results);
    // setMovies([1, 2, 3]);
  };

  const movieButton = <Button buttonText={BUTTON_GET_RANDOM_MOVIES} onClick={handleGetMovies} />;

  return <section className={styles.wrapper}>{!movies.length ? movieButton : <p>Movie List</p>}</section>;
}
