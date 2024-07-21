import { Section } from '@/features/misc';
import { JobTimeline, JobSection } from '@/features/experience';
import jobs from '@/features/experience/assets/json/jobs';
import styles from '@/features/experience/assets/css/ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <div
      className={`flex flex-col h-screen ${
        styles.wrapper || ''
      } from-green-1000/90 from-90% bg-gradient-to-t`}
    >
      <Section justify="justify-center" containerClass={styles.container}>
        <div className="text-6xl font-extrabold text-green-300 mt-[100px]">
          Mon Parcours
        </div>
        <JobTimeline jobs={jobs}>
          {jobs.map((e) => (
            <JobSection key={e.id} job={e} />
          ))}
        </JobTimeline>
      </Section>
    </div>
  );
}
