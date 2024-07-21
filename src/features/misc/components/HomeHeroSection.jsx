import devCoffee from '@/features/misc/assets/developer-working-coffee.svg';
import { Section } from '@/features/misc';

export default function HomeHeroSection() {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Section justify="justify-between" direction="flex-row">
        <div className="">
          <div className="text-2xl font-bold text-green-400">
            Bonjour, je m&apos;appelle
          </div>
          <div className="text-8xl font-bold text-green-200">OLIVER SPICER</div>
          <div className="text-3xl font-bold text-green-300">
            Ingénieur en développement full-stack
          </div>
        </div>
        <div>
          <img src={devCoffee} style={{ maxWidth: '700px' }} />
        </div>
      </Section>
    </div>
  );
}
