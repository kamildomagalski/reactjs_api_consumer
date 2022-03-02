import { useParams } from 'react-router-dom';
import styles from './pageError.module.scss';

interface errorNumber {
  errorNumber: string;
}

export default function PageError(): JSX.Element {
  const { errorNumber }: errorNumber = useParams();
  return (
    <section data-testid={errorNumber} className={styles.wrapper}>
      <h1>Erorr {errorNumber}</h1>
      <p>Sorry it looks like we have some problems.</p>
      <p>Please try again or come later</p>
    </section>
  );
}
