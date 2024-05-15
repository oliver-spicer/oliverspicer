export default function NavItem({ item }) {
  const styles = {
    plain: 'text-green-300 hover:bg-green-300/25',
    contain: 'bg-green-300 font-bold',
  };
  return (
    <a
      className={`px-4 py-2 ${styles[item.style] || styles.plain}`}
      href={item.href || '#'}
    >
      {item.label || 'Link'}
    </a>
  );
}
