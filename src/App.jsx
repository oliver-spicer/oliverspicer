import { HomeHeroSection, MatrixAnimation, Header } from '@/features/misc';
import { ExperienceSection } from '@/features/experience';

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
      <div className="absolute left-0 right-0 flex flex-col bg-green-1000/75">
        <Header />
      </div>
      <div className="container mx-auto flex flex-col h-screen">
        <div className="flex flex-col grow shrink basis-0 justify-center">
          <HomeHeroSection />
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        <ExperienceSection />
      </div>
    </div>
  );
}
