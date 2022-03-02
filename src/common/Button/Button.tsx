import style from './button.module.scss';

interface Props {
  onClick: () => void;
  buttonText: string;
}
export default function Button({ onClick, buttonText }: Props): JSX.Element {
  return (
    <button data-testid='button' type='button' className={style.button} onClick={onClick}>
      {buttonText}
    </button>
  );
}
