export default function NavItem({ item }) {
  const styles = {
    plain: 'neontext text-green-300 border-green-300/0 hover:text-green-50',
    contain: 'neonbox bg-green-300 border-green-300 font-bold',
  };
  return (
    <a
      className={`text-xl rounded-xl px-4 py-2 ${
        styles[item.style] || styles.plain
      }`}
      href={item.href || '#'}
    >
      {item.label || 'Link'}
    </a>
  );
}
