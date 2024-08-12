import { Section, Heading } from '@/features/misc';
import Carousel from '../../carousel/components/Carousel';
import { useState } from 'react';
import { SkillCategoryDisplay, skills, SkillPill } from '@/features/skills';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className="flex flex-col h-screen">
      <Section.Gradient justify="justify-center">
        <Heading tag="h1">Skills</Heading>
        <div className="grow shrink basis-0 self-stretch">
          <div className="flex justify-evenly">
            {skills.map((e) => (
              <SkillPill key={e.id} skill={e} />
            ))}
          </div>
          <Carousel
            active={activeCategory}
            setActive={setActiveCategory}
            slides={skills.map((e) => (
              <SkillCategoryDisplay key={e.id} category={e} />
            ))}
          />
        </div>
      </Section.Gradient>
    </div>
  );
}
