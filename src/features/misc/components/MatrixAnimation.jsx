import { useEffect, useState } from 'react';
import styles from '@/features/misc/assets/css/MatrixAnimation.module.css';
// https://codepen.io/alvarotrigo/pen/LYjgxPy

export default function MatrixAnimation() {
  const [cols, setCols] = useState([]);

  const duration = (index) => Math.random(300) / 23 + 1 + (index % 5);

  useEffect(() => {
    let colData = [];
    for (let n = 1; n < 160; n++) {
      let colContent = { duration: duration(n), data: [] };
      colContent.delay = colContent.duration / 50;
      colContent.startDelay = Math.random(100) + 1;
      for (let i = 0; i < 50; i++) {
        colContent.data.push(Math.floor(Math.random() * 255) + 10240);
      }
      colData = [...colData, colContent];
    }
    setCols(colData);
  }, []);

  return (
    <div className={styles.wrapper}>
      {cols.map((col, i) => (
        <div key={i} className={`${styles.column} col-${i}`}>
          {col.data.map((row, n) => (
            <span
              key={n}
              style={{
                animationDuration: col.duration + 's',
                animationDelay: col.startDelay + n * col.delay + 's',
              }}
            >
              <>{String.fromCharCode(row)}</>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
