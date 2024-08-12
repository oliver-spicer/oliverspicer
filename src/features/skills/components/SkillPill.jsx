import styles from '../assets/css/SkillPill.module.css';

export default function SkillPill({ skill, active }) {
  return (
    <div
      className={`${styles.active} text-xl rounded-full py-2 px-4 border-[3px] border-green-100/75 text-green-300/50 hover:bg-green-300/30 hover:border-green-100 hover:text-green-100 transition duration-300 cursor-pointer`}
    >
      {skill.label}
    </div>
  );
}
