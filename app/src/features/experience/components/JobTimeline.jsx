import styles from '../assets/css/JobTimeline.module.css';

export default function JobTimeline({ jobs, activeJob, setActiveJob }) {
  return (
    <>
      {jobs.map((e) => (
        <div
          className={`neontext flex flex-col justify-center relative w-5 cursor-pointer hover:text-green-50 ${
            activeJob == e.id ? ' text-green-50 scale-125' : ''
          }`}
          key={e.id}
          data-active={e.id === activeJob}
          onClick={() => setActiveJob(e.id)}
        >
          <div className="absolute bottom-3/4 left-1/2 whitespace-nowrap -translate-x-1/2">
            {e.label}
          </div>
          <div className="w-3 h-3 bg-green-400 rotate-45"></div>
        </div>
      ))}
      <div
        className={`h-1 w-full absolute top-1/2 -mt-0.5 flex ${styles.timeline}`}
      ></div>
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
