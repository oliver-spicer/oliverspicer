import { Section } from '@/features/misc';

export default function SkillsSection() {
  return (
    <div className="flex flex-col h-screen">
      <Section justify="justify-center">
        <div className="text-6xl font-extrabold text-green-900 mt-[100px]">
          Skills
        </div>
        <div className="grow shrink basis-0 self-stretch bg-green-100">
          Parcours Wrapper
        </div>
      </Section>
    </div>
  );
}
