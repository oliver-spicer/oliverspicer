import Image from 'next/image';
import styles from './Footer.module.scss';
import { whiteLogo } from '@/images';
import Heading from '../Heading';
export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid pb-3`}>
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <Image src={whiteLogo} width="400" height="auto" alt="logo" />
          </div>
          <div className="col ps-5 pt-4">
            <Heading className="pb-4" tag="h4">
              More About Me
            </Heading>
            <ul>
              <li>Company Profile</li>
              <li>CSR Initiatives</li>
            </ul>
          </div>
          <div className="col ps-5 pt-4">
            <Heading className="pb-4" tag="h4">
              Connect
            </Heading>
            <ul>
              <li>Employee Portal</li>
              <li>Customer Portal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-xl text-center">
        Copyright © 2023 Oliver Spicer
      </div>
    </footer>
  );
}
