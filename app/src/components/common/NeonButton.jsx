import styles from '../assets/css/NeonButton.module.css';

export default function NeonButton({ children, active, action }) {
  if (typeof action !== 'function') {
    action = (label) => {
      console.error('Error : ' + label);
    };
  }
  const activeClasses = `${styles.active} bg-green-300/30 border-green-50 text-green-50`;
  const nonActiveClasses = `${styles.hover} border-green-300/50 text-green-300/50 hover:bg-green-300/30 hover:border-green-50 hover:text-green-50`;

  return (
    <div
      className={`neon text-xl rounded-full py-2 px-4 border-[3px] transition duration-300 cursor-pointer ${
        active ? activeClasses : nonActiveClasses
      }`}
      onClick={action}
      data-active={active}
    >{ children }
    </div>
  );
}
