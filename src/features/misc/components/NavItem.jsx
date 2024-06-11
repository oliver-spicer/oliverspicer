export default function NavItem({ item }) {
  const styles = {
    plain: 'text-green-300 hover:bg-green-300/0 border-green-300/0 hover:border-green-300',
    contain: 'bg-green-300 border-green-300 font-bold hover:bg-green-300/75 hover:border-green-300/75',
  };
  return (
    <a
      className={`px-4 py-2 ${styles[item.style] || styles.plain}`}
      style={{borderWidth: '1px'}}
      href={item.href || '#'}
    >
      {item.label || 'Link'}
    </a>
  );
}
