import IconButton from '../../common/IconButton/IconButton';
import { Movie } from '../../types/types';
import { ReactComponent as DeleteIcon } from '../../assets/close.svg';

import styles from './detailModal.module.scss';

interface Props extends Movie {
  handleCloseModal: () => void;
}

export default function DetailModal({ ...props }: Props): JSX.Element {
  const { overview, original_language, original_title, poster_path, release_date, vote_average, handleCloseModal } =
    props;

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <IconButton ButtonIcon={DeleteIcon} onClick={handleCloseModal} />
        </div>
        <div className={styles.info}>
          <h1 data-testid='title' className={styles.title}>
            {original_title}
          </h1>
          <p data-testid='language'>
            <span className={styles.bold}>Original language:</span> {original_language}
          </p>
          <div className={styles.details}>
            <p data-testid='releaseDate'>
              <span className={styles.bold}>Date of release:</span> {release_date}
            </p>
            <p data-testid='voteAverage'>
              <span className={styles.bold}>Average vote:</span> {vote_average}
            </p>
          </div>
          <div className={styles.description}>
            <p>
              <span className={styles.bold}>Description</span>
            </p>
            <p data-testid='overview'>{overview}</p>
          </div>
        </div>
        <div className={styles.poster}>
          <img
            data-testid='modalImage'
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`poster for ${original_title}`}
          />
        </div>
      </div>
    </div>
  );
}
