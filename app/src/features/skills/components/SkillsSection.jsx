import { Section, Heading } from '@/features/misc';
import Carousel from '../../carousel/components/Carousel';
import { useState, useEffect } from 'react';
import { SkillCategoryDisplay, skills, SkillPill } from '@/features/skills';
import { FilteredList } from '../../filteredlist';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const renderSkillPill = (filter, active, filterItems) => (
    <SkillPill
      key={filter}
      skill={{ label: filter }}
      active={active}
      action={filterItems}
    />
  );
  const renderSkills = (skills) => {
    return (
      <div className="px-52 pt-16 flex flex-wrap justify-center">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="mx-[30px] mb-[30px] flex flex-col items-center transition-opacity duration-300 cursor-pointer"
            >
              <img
                src={`/src/features/skills/assets/img/${skill.id}.png`}
                width="75"
                height="75"
              />
              <p className="text-green-50">{skill.label}</p>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (!skills.length) {
      // Throw error
    }
    setActiveCategory(skills[0]?.id ?? 0);
  }, []);
  return (
    <div className="flex flex-col">
      <Section.Gradient justify="justify-center">
        <div className="h-4/5 w-full">
          <Heading tag="h1" my="mt-[100px]">
            Mes Compétences
          </Heading>
          <div className="grow shrink basis-0 self-stretch">
            <div className="w-2/3 mx-auto text-center mb-[60px] text-green-50 text-xl">
              <p>
                This is a short text segment desribing my skillset. In this text
                I'd like to try and give people an idea of the developer profile
                I have. But maybe also give them a sense of that I'm more than
                just a developer.
              </p>
              <p>
                <a href="#">LinkedIn</a>
              </p>
            </div>
            <FilteredList
              data={skills}
              filter="category"
              renderFilter={renderSkillPill}
              renderList={renderSkills}
            />

            {/* ########################################################## 
            <div className="flex justify-evenly">
              {skills.map((e) => (
                <SkillPill key={e.id} skill={e} />
              ))}
            </div>
            <Carousel
              active={activeCategory}
              setActive={setActiveCategory}
              slides={skills.map((e) => (
                <SkillCategoryDisplay
                  key={e.id}
                  category={e}
                  active={activeCategory}
                />
              ))}
            />*/}
          </div>
        </div>
      </Section.Gradient>
    </div>
  );
}
