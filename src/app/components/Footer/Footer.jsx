import Image from 'next/image';
import styles from './Footer.module.scss';
import { whiteLogo } from '@/images';
import Heading from '../Heading';
export default function Footer() {
  return (
    <footer className="container-xl">
      <div>
        <Image src={whiteLogo} width="400" height="auto" alt="logo" />
      </div>
      <div>
        <Heading tag="h4">More About Me</Heading>
        <ul>
          <li>One thing</li>
          <li>Two thing</li>
        </ul>
      </div>
      <div>
        <Heading tag="h4">Connect</Heading>
        <ul>
          <li>One thing</li>
          <li>Two thing</li>
        </ul>
      </div>
    </footer>
  );
}
