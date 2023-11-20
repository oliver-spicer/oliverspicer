'use client';
import styles from './Timeline.module.scss';
import { Heading } from '@/components/Heading';
import data from '@/data/timeline.json';

import { motion } from 'framer-motion';

export default function Timeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.8,
      },
    },
  };
  const leftItem = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  };
  const rightItem = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className={`${styles.timeline} container-xl`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-200px' }}
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
      <div className={styles.tlBar}></div>
      {data.map((entry) => {
        return (
          <div
            key={entry.id}
            className={`${styles.row} row position-relative d-flex justify-content-center my-4`}
          >
            {entry.id % 2 === 1 && (
              <div className="col-4 text-end">
                <div className={`${styles.tlDate}`}>{entry.period}</div>
              </div>
            )}
            <div className={`col-4`}>
              <motion.div
                className={`${styles.tlCard}`}
                variants={entry.id % 2 === 1 ? rightItem : leftItem}
              >
                <Heading tag="h3" appearence="h4">
                  {entry.title}
                  <br />
                  <small className={`fst-italic`}>{entry.company}</small>
                </Heading>
                <div className={`${styles.tlTags}`}>
                  {entry.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
            {entry.id % 2 === 0 && (
              <div className="col-4">
                <div className={`${styles.tlDate}`}>{entry.period}</div>
              </div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
