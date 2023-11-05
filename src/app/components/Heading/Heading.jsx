import styles from './Heading.module.scss';

export default function Heading({ children, tag: Tag, appearence }) {
  if (!Tag) return <h1>{children}</h1>;

  return <Tag className={appearence}>{children}</Tag>;
}
