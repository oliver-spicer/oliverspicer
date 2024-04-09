import Image from 'next/image';
import styles from './Footer.module.scss';
import { whiteLogo } from '@/images';
import { Heading } from '../Heading';
export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid pb-3 pt-5`}>
      <div className="container-xl">
        <div className="row">
          <div className="col text-center py-3">
            <Image src={whiteLogo} width="400" height="auto" alt="logo" />
          </div>
        </div>
      </div>
      <div className="container-xl text-center">
        Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
