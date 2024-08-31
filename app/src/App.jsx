import {
  HomeHeroSection,
  MatrixAnimation,
  Header,
  Footer,
} from '@/features/misc';
import { ExperienceSection } from '@/features/experience';
import { SkillsSection } from '@/features/skills';
import { ContactSection } from '@/features/contact';

import '/src/assets/fonts/neon-pixel.regular.ttf';
import '/src/assets/fonts/sportrop.regular.ttf';

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

  return (
    <div className="h-screen font-mono">
      <MatrixAnimation />
      <Header />
      <HomeHeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
