import { useCallback } from 'react';
import { Movie } from '../../types/types';
import styles from './card.module.scss';

interface Props extends Movie {
  handleShowModal: (id: number) => void;
}
export default function Card({ ...props }: Props): JSX.Element {
  const { id, original_language, original_title, poster_path, release_date, vote_average, handleShowModal } = props;

  const handleDisplay = useCallback(() => handleShowModal(id), [id, handleShowModal]);
  return (
    <div className={styles.wrapper} onClick={handleDisplay}>
      <div className={styles.poster}>
        <img
          data-testid='image'
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`poster for ${original_title}`}
        />
      </div>
      <div className={styles.titleWrapper}>
        <h2 data-testid='title' className={styles.title}>
          {original_title} ({original_language})
        </h2>
      </div>
      <div className={styles.info}>
        <p data-testid='releaseDate'>Date of release: {release_date}</p>
        <p data-testid='voteAverage'>Average vote: {vote_average}</p>
      </div>
    </div>
  );
}
