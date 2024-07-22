import { JobSection } from '@/features/experience';
import { useEffect } from 'react';
import { useState } from 'react';

export default function JobTimeline({ jobs }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!jobs.length) {
      // Throw error
    }
    setActive(jobs[0]?.id ?? 0);
  }, []);

  return (
    <>
      <div className="h-24 flex self-stretch relative justify-around text-green-300 font-bold">
        {jobs.map((e) => (
          <div
            className="flex flex-col justify-center relative w-5"
            key={e.id}
            data-active={e.id === active}
          >
            <div className="absolute top-0 left-1/2 whitespace-nowrap -translate-x-1/2 text-xl">
              {e.label}
            </div>
            <div className="w-4 h-4 bg-green-500 rotate-45"></div>
          </div>
        ))}
        <div className="h-1 bg-green-500 w-full absolute top-1/2 -mt-0.5 flex"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch">
        {jobs.map((e) => (
          <JobSection key={e.id} job={e} />
        ))}
      </div>
    </>
  );
}
/*
export default function JobTimeline({ jobs, children }) {
  return (
    <>
      <div className="h-24 flex self-stretch relative justify-around text-green-300 font-bold">
        {jobs.map((e) => (
          <div className="flex flex-col" key={e.id}>
            <div className="h-1/4 text-xl">{e.label}</div>
            <div className="h-1/2 flex justify-center items-center">
              <div className="w-4 h-4 bg-green-500 rotate-45"></div>
            </div>
          </div>
        ))}
        <div className="h-1 bg-green-500 w-full absolute top-1/2 -mt-0.5 flex"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch">{children}</div>
    </>
  );
}
*/
