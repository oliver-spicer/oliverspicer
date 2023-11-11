import styles from './Button.module.scss';

export default function Button(props) {
  const { children, variant } = props;
  const variantClass = variant ? styles['btn-' + variant] : '';

  return (
    <button
      {...props}
      className={`${styles.button} btn ${variantClass} ${props.className}`}
    >
      {children}
    </button>
  );
}
