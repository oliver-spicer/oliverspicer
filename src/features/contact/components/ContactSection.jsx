import { Section } from '@/features/misc';

export default function ContactSection() {
  return (
    <div className="flex flex-col h-screen">
      <Section justify="justify-center">
        <div className="text-6xl font-extrabold text-green-900 mt-[100px]">
          Contact
        </div>
        <div className="grow shrink basis-0 self-stretch bg-green-100">
          Parcours Wrapper
        </div>
      </Section>
    </div>
  );
}
