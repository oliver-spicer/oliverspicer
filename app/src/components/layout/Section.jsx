import styles from '../assets/css/Section.module.css';

const Inner = function ({
  children,
  classes,
  justify,
  direction,
  containerClass,
}) {
  justify = justify || '';
  classes = classes || '';
  direction = direction || 'flex-col';
  containerClass = containerClass || '';

  return (
    <div className={`container mx-auto ${containerClass}`}>
      <section
        className={`flex items-center h-screen ${classes} ${justify} ${direction}`}
      >
        {children}
      </section>
    </div>
  );
};

Inner.Gradient = function Gradient(props) {
  return (
    <div className={styles.gradient}>
      <Inner {...props} />
    </div>
  );
};

export default Inner;
