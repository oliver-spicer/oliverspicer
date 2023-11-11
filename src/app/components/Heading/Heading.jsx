import styles from './Heading.module.scss';

export default function Heading({ children, tag: Tag, appearence, className }) {
  if (!Tag) return <h1>{children}</h1>;
  return (
    <Tag
      className={
        (appearence !== undefined ? appearence : '') +
        ' ' +
        (className !== undefined ? className : '')
      }
    >
      {children}
    </Tag>
  );
}
