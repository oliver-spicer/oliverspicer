export default function Carousel({ slides, active, setActive }) {
  const keys = slides.map((e) => e.key);

  const nav = (direction) => {
    setActive(() => {
      if (keys.indexOf(active) == keys.length - 1 && direction == 1) {
        return keys[0];
      }
      if (keys.indexOf(active) == 0 && direction == -1) {
        return keys[keys.length - 1];
      }
      return keys[keys.indexOf(active) + direction];
    });
  };

  return (
    <div className="h-full flex items-center relative">
      <div
        className="w-8 text-9xl text-green-400/25 hover:text-green-400/75 cursor-pointer scale-y-[200%]"
        onClick={() => nav(-1)}
      >
        &lt;
      </div>
      {slides}
      <div
        className="w-8 text-9xl text-green-400/25 hover:text-green-400/75 cursor-pointer scale-y-[200%]"
        onClick={() => nav(1)}
      >
        &gt;
      </div>
    </div>
  );
}
