import { Logo, Nav } from '@/features/misc';
import HomeHeader from './features/misc/components/HomeHeader';

export default function App() {
  console.log(`  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'               \`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$'                   \`$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$'\`$$$$$$$$$$$$$'\`$$$$$$!                       !$$$$$$'\`$$$$$$$$$$$$$'\`$$$
  $$$$  $$$$$$$$$$$  $$$$$$$                         $$$$$$$  $$$$$$$$$$$  $$$$
  $$$$. \`$' \\' \\$\`  $$$$$$$!                         !$$$$$$$  '$/ \`/ \`$' .$$$$
  $$$$$. !\\  i  i .$$$$$$$$                           $$$$$$$$. i  i  /! .$$$$$
  $$$$$$   \`--\`--.$$$$$$$$$                           $$$$$$$$$.--'--'   $$$$$$
  $$$$$$L        \`$$$$$^^$$                           $$^^$$$$$'        J$$$$$$
  $$$$$$$.   .'   ""~   $$$    $.                 .$  $$$   ~""   \`.   .$$$$$$$
  $$$$$$$$.  ;      .e$$$$$!    $$.             .$$  !$$$$$e,      ;  .$$$$$$$$
  $$$$$$$$$   \`.$$$$$$$$$$$$     $$$.         .$$$   $$$$$$$$$$$$.'   $$$$$$$$$
  $$$$$$$$    .$$$$$$$$$$$$$!     $$\`$$$$$$$$'$$    !$$$$$$$$$$$$$.    $$$$$$$$
  $JT&yd$     $$$$$$$$$$$$$$$$.    $    $$    $   .$$$$$$$$$$$$$$$$     $by&TL$
                                   $    $$    $
                                   $.   $$   .$
                                   \`$        $'
                                    \`$$$$$$$$'`);
  const items = [
    { href: '/toto', label: 'Parcours', style: 'plain' },
    { href: '/toto', label: 'Compétences', style: 'plain' },
    { href: '/toto', label: 'Formation', style: 'plain' },
    { href: '/toto', label: 'Projets', style: 'plain' },
    { href: '/toto', label: 'Contact', style: 'contain' },
  ];
  return (
    <div className="h-screen bg-green-1000 font-mono">
      <div className="container mx-auto flex flex-col h-screen">
        <div className="flex align-center justify-between py-4">
          <Logo />
          <Nav items={items} />
        </div>
        <div className="flex flex-col grow shrink basis-0 justify-center">
          <HomeHeader />
        </div>
      </div>
    </div>
  );
}
