import styles from './Button.module.scss';

export default function Button({ children, variant }) {
  return (
    <button className={`btn btn-${variant ?? 'primary'}`}>{children}</button>
  );
}
