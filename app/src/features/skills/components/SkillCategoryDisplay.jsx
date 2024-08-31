import styles from '@/features/skills/assets/css/SkillPill.module.css';
import bootstrap from '../assets/img/bootstrap.png';

export default function SkillCategoryDisplay({ category, active }) {
  const isActive = active === category.id;

  if (!isActive) {
    return <></>;
  }

  return (
    <div className="w-full flex justify-center">
      {category.skills.map((e) => (
        <div
          className={`text-green-300 p-6 m-6 cursor-pointer text-center opacity-50 hover:opacity-100 transition-opacity duration-300`}
          key={e.id}
        >
          <img className={`pb-3`} src={bootstrap} />
          {e.label}
        </div>
      ))}
    </div>
  );
}
