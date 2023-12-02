import styles from './Input.module.scss';

export default function Input({ id, label, type, value, onChange }) {
  type = type || 'text';
  return <div className={styles.inputWrapper}>
    <label htmlFor={id}>{label}</label>
    {type == 'textarea' ? (
      <textarea id={id} name={id} value={value} onChange={onChange} />
    ) : (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
    />
    )}
</div>
}