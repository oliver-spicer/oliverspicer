export default function NavItem({ item }) {
    const styles = {
        plain: "text-green-300",
        contain: "bg-green-300"
    }
    return <a className={`px-2 ${styles[item.style] || styles.plain}`} href={item.href || '#'}>{item.label || 'Link'}</a>
}