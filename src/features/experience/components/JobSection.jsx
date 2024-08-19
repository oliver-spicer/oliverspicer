import styles from '../assets/css/JobSection.module.css';

export default function JobSection({ job, activeJob }) {
  //const { active } = useContext(CarouselContext);
  let isActive = job.id === activeJob;

  return (
    <div
      className={`${isActive ? styles.active : ''} ${
        styles.jobSection
      } w-7/12 h-fit mx-auto`}
    >
      <div className="text-lg font-bold text-green-500">{job.event.date}</div>
      <div className="text-4xl font-extrabold text-green-200 uppercase">
        {job.event.title}
        <div className="text-lg font-normal text-green-500 inline-block pl-2 normal-case italic">
          {job.event.contract}
        </div>
      </div>
      <div className="text-2xl font-bold text-green-500">
        {job.event.employer}
      </div>
      <div className="mt-3 text-sm text-green-100">
        {Array.isArray(job.event.description) &&
          job.event.description.map((e, idx) => (
            <p className="py-1" key={idx}>
              {e}
            </p>
          ))}
      </div>
      {job.event.mission && (
        <div className={`${styles.mission} flex mt-8`}>
          <div className={`w-10 mr-3 flex flex-col items-center`}>
            <div className="w-3 h-3 bg-green-400 rotate-45"></div>
            <div
              className={`grow shrink basis-0 w-1 bg-gradient-to-b from-green-400 from-75%`}
            ></div>
          </div>
          <div>
            <div className="text-sm font-bold text-green-500">
              {job.event.mission.date}
            </div>
            <div className="text-3xl font-extrabold text-green-200 uppercase">
              {job.event.mission.title}
              <div className="text-sm font-normal text-green-500 inline-block pl-2 normal-case italic">
                {job.event.mission.contract}
              </div>
            </div>
            <div className="text-xl font-bold text-green-500">
              {job.event.mission.employer}
            </div>
            <div className="mt-3 text-sm text-green-100">
              {Array.isArray(job.event.mission.description) &&
                job.event.mission.description.map((e, idx) => (
                  <p className="py-1" key={idx}>
                    {e}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
