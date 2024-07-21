import { Section } from '@/features/misc';

export default function SourceCodeSection() {
  return (
    <div className="flex flex-col h-screen">
      <Section justify="justify-center">
        <div className="text-6xl font-extrabold text-green-900 mt-[100px]">
          Source Code
        </div>
        <div className="h-32 bg-green-200 flex self-stretch">Timeline</div>
        <div className="grow shrink basis-0 self-stretch bg-green-100">
          Parcours Wrapper
        </div>
      </Section>
    </div>
  );
}
