import { HomeHeroSection, MatrixAnimation, Header } from '@/features/misc';
import { ExperienceSection } from '@/features/experience';
import { SkillsSection } from '@/features/skills';
import { SourceCodeSection } from '@/features/sourcecode';
import { ContactSection } from '@/features/contact';

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
      <SourceCodeSection />
      <ContactSection />
    </div>
  );
}
