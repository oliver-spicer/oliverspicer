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
        {false && (
          <div className="pt-3">
            <Button variant="green" className="me-3">
              Services
            </Button>
            <Button variant="green" className="ms-3">
              My Story
            </Button>
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: 'rotate(180deg)',
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: 'relative',
              display: 'block',
              width: 'calc(100% + 1.3px)',
              height: '120px',
              transform: 'rotateY(180deg)',
            }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
              style={{ fill: '#ffffff' }}
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
              style={{ fill: '#ffffff' }}
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
              style={{ fill: '#ffffff' }}
            ></path>
          </svg>
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
            <Heading tag="h3" appearence="h2" className={`${styles.purple}`}>
              A little about me
            </Heading>
          </div>
          <div className="col">
            <p className="pb-2">
              Over the past 10+ years, I’ve worked on various projects from web
              design to software architecture. All the while, I’ve continued to
              grow as an IT expert and as a person.
            </p>
            <p className="pb-2">
              These days, I’m focused on bringing great web experiences to life
              through my passion for coding.
            </p>
            <p>If you’d like to read more, check out my story.</p>
            {false && (
              <Button variant="purple" className="mt-5">
                My Story
              </Button>
            )}
          </div>
        </div>
      </section>
      <section
        className={`${styles.parallax} container-fluid mt-5 text-center`}
        style={{
          backgroundImage: `url(/images/log-pile50.jpg)`,
          padding: '300px 0',
          color: '#fff',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: 'rotate(180deg)',
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: 'relative',
              display: 'block',
              width: 'calc(100% + 1.3px)',
              height: '100px',
            }}
          >
            <path
              d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
              class="shape-fill"
              style={{ fill: '#FFFFFF' }}
            ></path>
          </svg>
        </div>
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
        <Button variant="green-semi-outline">Let's work together</Button>
        {false && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              overflow: 'hidden',
              lineHeight: 0,
            }}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{
                position: 'relative',
                display: 'block',
                width: 'calc(100% + 1.3px)',
                height: '100px',
              }}
            >
              <path
                d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                class="shape-fill"
                style={{ fill: '#FFFFFF' }}
              ></path>
            </svg>
          </div>
        )}
      </section>
      {false && (
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
      )}
      <section className={styles.cta}>
        <div className={`container-xl`}>
          <div className="row d-flex h-100 px-5 align-items-center">
            <div className="col-5">
              <Heading tag="h2" appearence="h1" className={`${styles.purple}`}>
                Start a project
              </Heading>
            </div>
            <div className="col-5">
              <p>Interested in collaborating ? Send me a mesage !</p>
            </div>
            <div className="col-2 text-center">
              <Button variant="green">Let's Go !</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
