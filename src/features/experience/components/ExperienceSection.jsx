import { Section, Heading } from '@/features/misc';
import { JobTimeline, JobSection } from '@/features/experience';
import { Carousel } from '@/features/carousel';
import { useState, useEffect } from 'react';
import jobs from '@/features/experience/assets/json/jobs';
import styles from '@/features/experience/assets/css/ExperienceSection.module.css';

export default function ExperienceSection() {
  const [activeJob, setActiveJob] = useState(0);

  useEffect(() => {
    if (!jobs.length) {
      // Throw error
    }
    setActiveJob(jobs[0]?.id ?? 0);
  }, []);

  return (
    <div className={`flex flex-col ${styles.wrapper || ''}`}>
      <Section.Gradient containerClass={styles.container}>
        <div className="w-full h-3/5 flex flex-col items-center justify-center">
          <Heading tag="h1">Mon Parcours</Heading>
          <div className="h-24 flex self-stretch relative justify-around text-green-300/50 font-bold text-xl">
            <JobTimeline
              jobs={jobs}
              activeJob={activeJob}
              setActiveJob={setActiveJob}
            />
          </div>
          <div className="grow shrink basis-0 self-stretch">
            {/* Make a carousel component, and make the job timeline fit into it */}
            <Carousel
              active={activeJob}
              setActive={setActiveJob}
              slides={jobs.map((e) => (
                <JobSection key={e.id} job={e} activeJob={activeJob} />
              ))}
            ></Carousel>
          </div>
        </div>
      </Section.Gradient>
    </div>
  );
}
