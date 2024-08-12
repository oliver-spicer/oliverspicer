export default function Heading({ tag: Tag, children, className }) {
  if (!Tag.match(/h[0-9]/)) {
    return <>TOTO</>;
  }

  className = className || '';
  return (
    <Tag
      className={`text-center text-6xl font-extrabold text-green-300 my-[100px] pb-[50px] ${className}`}
    >
      {children}
    </Tag>
  );
}
