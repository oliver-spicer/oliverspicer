export default function Section({
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
}
