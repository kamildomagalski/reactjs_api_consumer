import { useCallback, useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Card from '../Card/Card';

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
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(selectedMovie);
  }, [selectedMovie]);

  const handleGetMovies = async () => {
    const results = await getPopularMovies();
    if (results) setMovies(results);
  };

  const handleShowInfo = useCallback((id: number) => {
    setSelectedMovie(id);
  }, []);
  const movieButton = <Button buttonText={BUTTON_GET_RANDOM_MOVIES} onClick={handleGetMovies} />;
  if (!movies.length) {
    return <section className={styles.wrapper}>{movieButton}</section>;
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.gridContainer}>
        {movies.map((movie) => {
          const { id, original_language, original_title, overview, poster_path, release_date, vote_average } = movie;
          return (
            <div key={id} className={styles.cardWrapper}>
              <Card
                id={id}
                original_language={original_language}
                original_title={original_title}
                overview={overview}
                poster_path={poster_path}
                release_date={release_date}
                vote_average={vote_average}
                handleShowInfo={handleShowInfo}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
