import { HomeHeroSection, MatrixAnimation, Header } from '@/features/misc';

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
    <div className="h-screenfont-mono">
      <MatrixAnimation />
      <div className="container mx-auto flex flex-col bg-green-1000">
        <Header />
      </div>
      <div className="container mx-auto flex flex-col h-screen">
        <div className="flex flex-col grow shrink basis-0 justify-center">
          <HomeHeroSection />
        </div>
      </div>
    </div>
  );
}
