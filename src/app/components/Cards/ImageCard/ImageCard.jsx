import Image from 'next/image';
import styles from './ImageCard.module.scss';

export default function ImageCard({ image, ratio, children }) {
  const imageRatio = ratio ?? '1-1';

  return (
    <div className={`col`}>
      <div
        className={`${styles.imageCardWrapper} ${styles['ratio' + imageRatio]}`}
      >
        {image && <Image src={image} fill={true} alt="image" />}
        <div className={`text-center fs-1 ${styles.textWrapper}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
