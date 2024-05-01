export default function LoaderBlock({ isActive }) {
  return (
    <>
      <div
        className={`${
          isActive ? 'bg-green-400' : 'bg-green-900' // Light mode: 500 / 300
        } w-6 h-6 m-0.5`}
      ></div>
    </>
  );
}
