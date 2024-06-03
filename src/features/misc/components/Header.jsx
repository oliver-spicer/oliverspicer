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
    <div className="">
      <Logo />
      <Nav items={items} />
    </div>
  );
}
