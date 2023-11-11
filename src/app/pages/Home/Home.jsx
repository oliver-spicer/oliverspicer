/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ImageCard from '@/components/Cards/ImageCard';
import Heading from '@/components/Heading';

import styles from './Home.module.scss';

import {
  greenLeafedTrees,
  snowyMountain,
  topOfMountain,
  projectIci,
  projectLs,
  projectRu,
} from '@/images';

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <section
        className={`${styles.heroSection} container-fluid text-center pb-5 mb-5 d-flex flex-column justify-content-center`}
      >
        <p className={`${styles.mainHeader} h1 mb-3`}>Hi. I'm Oliver</p>
        <Heading
          tag="h1"
          appearence="h2"
          className={`${styles.subHeader} mb-4`}
        >
          Passionate software engineer with an <br />
          obession with web design & development.
        </Heading>
        <p className={`h5 mb-2`}>
          I love to build clean & efficient websites and applications, focusing
          <br />
          on intuitive user experiences.
        </p>
        <div className="pt-3">
          <Button variant="primary">Services</Button>
          <Button variant="primary">My Story</Button>
        </div>
      </section>
      <section className="container-xl py-5 my-5">
        <div className="row mx-5">
          <ImageCard image={greenLeafedTrees}>Design</ImageCard>
          <ImageCard image={snowyMountain}>Development</ImageCard>
          <ImageCard image={topOfMountain}>Integration</ImageCard>
        </div>
      </section>
      <section className="container-xl py-5 my-5">
        <div className="row mx-5">
          <div className="col">
            <Heading tag="h3" appearence="h2">
              A little about me
            </Heading>
          </div>
          <div className="col">
            <p>
              Over the past 10+ years, I’ve worked on various projects from web
              design to software architecture. All the while, I’ve continued to
              grow as an IT expert and as a person.
            </p>
            <p>
              These days, I’m focused on bringing great web experiences to life
              through my passion for coding.
            </p>
            <p>If you’d like to read more, check out my story.</p>
            <Button>My Story</Button>
          </div>
        </div>
      </section>
      <section
        className="container-fluid my-5 text-center"
        style={{
          backgroundImage: `url(/images/log-pile.jpg)`,
          backgroundSize: 'cover',
          padding: '120px 0',
          color: '#fff',
        }}
      >
        <Heading
          tag="h2"
          appearence="h1"
          className={`${styles.secondaryHeader} ${styles.green} fst-italic`}
        >
          You're still here ?
        </Heading>
        <p className="py-3">
          If you’re reading this, I’ve successfully caught your attention. Great
          !
          <br />
          I’m always open to discussing potential collaborations.
        </p>
        <Button variant="outline-primary">Let's work together</Button>
      </section>
      <section className="container-xl py-5 my-5 text-center">
        <Heading
          tag="h2"
          appearence="h1"
          className={`${styles.secondaryHeader} ${styles.green}`}
        >
          Projects
        </Heading>
        <div className="row py-5">
          <ImageCard image={projectIci} ratio="16-9" />
          <ImageCard image={projectLs} ratio="16-9" />
          <ImageCard image={projectRu} ratio="16-9" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
