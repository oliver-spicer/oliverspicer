import logo from '../assets/ows-logo6.png';

export default function Logo() {
  /*return (
    <div className="logo flex items-center">
      <div className="flex items-center justify-center rounded-full border-[3px] border-green-300 text-sm text-green-300 w-12 h-12 text-center">
        <div className="tracking-tightest font-bold -ml-[2px]">O W S</div>
      </div>
      <div className="text-green-300 pl-2 text-lg font-bold">OLIVER SPICER</div>
    </div>
  );*/
  return (
    <div className="logo flex items-center">
      <img className="h-[75px]" src={logo} />
    </div>
  );
}
