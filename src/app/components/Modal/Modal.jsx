import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styles from './Modal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Modal(props) {
  const { setDisplayTo } = props;

  if (!setDisplayTo) {
    return <>Bad Params</>;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.background}
          onClick={() => setDisplayTo(false)}
        />
        <motion.div
          className={`${styles.modal} container-sm`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0, duration: 0.3 },
            },
          }}
        >
          <div className={styles.header}>
            Modal Header
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              style={{ color: '#e55757' }}
              className={styles.closeButton}
              onClick={() => setDisplayTo(false)}
            />
          </div>
          <div className={`${styles.body} pt-3 mx-5 pb-5`}>
            {props.children}
          </div>
        </motion.div>
      </div>
    </>
  );
}
