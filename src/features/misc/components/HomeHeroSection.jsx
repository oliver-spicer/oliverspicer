import devCoffee from '@/features/misc/assets/developer-working-coffee.svg';
import { Section, Heading } from '@/features/misc';

export default function HomeHeroSection() {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Section justify="justify-center" direction="flex-row">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">
            Bonjour, je m&apos;appelle
          </div>
          <Heading
            className="text-8xl text-green-200"
            my="my-2"
            pb="pb-2"
            tag="h3"
          >
            OLIVER SPICER
          </Heading>
          <div className="text-3xl font-bold text-green-300">
            Ingénieur en développement full-stack
          </div>
        </div>
      </Section>
    </div>
  );
}
