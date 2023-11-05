import Image from 'next/image';
import { smallWhiteLogo } from '@/images';
import styles from './Header.module.scss';
import Nav from '@/components/Nav';
import Button from '../Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container-xl d-flex align-items-center">
        <Image
          className={`${styles.logo} me-auto`}
          width="auto"
          height="100"
          src={smallWhiteLogo}
          alt="logo"
        />
        <Nav />
        <Button>Hire Me</Button>
      </div>
    </header>
  );
}
