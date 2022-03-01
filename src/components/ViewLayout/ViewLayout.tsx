import styles from './viewLayout.module.scss';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

export default function ViewLayout({ children }: Props): JSX.Element {
  return (
    <section className={styles.main}>
      <Header />
      {children}
    </section>
  );
}
