export default function Heading({ tag: Tag, children, className, my, pb }) {
  if (!Tag.match(/h[0-9]/)) {
    return <>TOTO</>;
  }

  my = my || 'my-[100px]';
  pb = pb || 'pb-[50px]';

  className = className || '';
  return (
    <Tag
      className={`text-center text-6xl text-green-50 ${my} ${pb} ${className}`}
    >
      {children}
    </Tag>
  );
}
