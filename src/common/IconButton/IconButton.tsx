import styles from './iconButton.module.scss';

interface Props {
  onClick: () => void;
  ButtonIcon: any;
}

export default function IconButton({ ...props }: Props): JSX.Element {
  const { onClick, ButtonIcon } = props;
  return (
    <button data-testid='icon_button' type='button' className={styles.button} onClick={onClick}>
      <ButtonIcon className={styles.icon} />
    </button>
  );
}
