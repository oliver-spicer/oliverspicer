import NavItem from "./NavItem"

export default function Nav({ items }) {
    return <nav className="flex items-center">
        {items.map((item, idx) => <NavItem item={item} key={idx} />)}
    </nav>
}