import style from './header.module.scss';
import Logo from '../../common/Logo/Logo';

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Logo />
      <p data-testid='title' className={style.title}>
        The Movie Database
      </p>
    </header>
  );
}
