import { Logo, Nav } from '@/features/misc';
export default function Header() {
  const items = [
    { href: '/toto', label: 'Parcours', style: 'plain' },
    { href: '/toto', label: 'Compétences', style: 'plain' },
    { href: '/toto', label: 'Formation', style: 'plain' },
    { href: '/toto', label: 'Projets', style: 'plain' },
    { href: '/toto', label: 'Contact', style: 'contain' },
  ];

  return (
    <div className="container mx-auto my-3 flex justify-between">
      <Logo />
      <Nav items={items} />
    </div>
  );
}
