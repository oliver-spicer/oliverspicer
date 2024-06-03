import devCoffee from '@/features/misc/assets/developer-working-coffee.svg';

export default function HomeHeroSection() {
  return (
    <section className="flex items-center justify-between">
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
    </section>
  );
}
