import { useCallback, useEffect, useState, useMemo } from 'react';
import Button from '../../common/Button/Button';
import Card from '../Card/Card';
import DetailModal from '../DetailModal/DetailModal';

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
    setLoading(true);
    const results = await getPopularMovies();
    if (results) {
      setMovies(results);
      setLoading(false);
    }
  };

  const handleShowModal = useCallback((id: number) => {
    setSelectedMovie(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const movieButton = <Button buttonText={BUTTON_GET_RANDOM_MOVIES} onClick={handleGetMovies} />;

  const selectedMovieModal = useMemo(() => {
    const movie: Movie | undefined = movies.find((movie) => movie.id === selectedMovie);
    if (!movie) return;
    const { id, original_language, original_title, overview, poster_path, release_date, vote_average } = movie;
    return (
      <DetailModal
        id={id}
        original_language={original_language}
        original_title={original_title}
        overview={overview}
        poster_path={poster_path}
        release_date={release_date}
        vote_average={vote_average}
        handleCloseModal={handleCloseModal}
      />
    );
  }, [selectedMovie, movies, handleCloseModal]);

  if (!movies.length && !loading) {
    return <section className={styles.wrapper}>{movieButton}</section>;
  }
  if (loading) return <section className={styles.wrapper}>loading results...</section>;
  return (
    <section className={styles.wrapper}>
      {selectedMovie && selectedMovieModal}
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
                handleShowModal={handleShowModal}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
