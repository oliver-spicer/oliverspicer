export default function JobTimeline({ jobs, children }) {
  return (
    <>
      <div className="h-32 flex self-stretch relative justify-around text-green-300 font-bold">
        {jobs.map((e) => (
          <div className="flex flex-col justify-center relative w-5" key={e.id}>
            <div className="absolute top-0 left-0 right-0">{e.label}</div>
            <div className="w-4 h-4 bg-green-500 rotate-45"></div>
          </div>
        ))}
        <div className="h-1 bg-green-500 w-full absolute top-1/2 -mt-0.5 flex"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch">{children}</div>
    </>
  );
}
