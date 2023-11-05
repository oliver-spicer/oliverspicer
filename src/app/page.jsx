import Footer from './components/Footer';
import Header from './components/Header';
import styles from './page.module.css';
import Button from './components/Button';
import ImageCard from './components/Cards/ImageCard';
import Heading from './components/Heading';

import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.scss';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="container-sm text-center">
        <p className={`${styles.mainHeader} h1`}>Hi. I'm Oliver</p>
        <Heading tag="h1" appearence="h2">
          A Passionate software engineer with an <br />
          obession with web design & development.
        </Heading>
        <Heading tag="h2" appearence="h3">
          I love to build clean & efficient websites and applications, focusing
          <br />
          on intuitive user experiences.
        </Heading>
        <div>
          <Button variant="outline-primary">Services</Button>
          <Button variant="outline-primary">My Story</Button>
        </div>
      </section>
      <section>
        <div>
          <ImageCard>Design</ImageCard>
          <ImageCard>Development</ImageCard>
          <ImageCard>Integration</ImageCard>
        </div>
      </section>
      <section className="container-xl">
        <div>
          <Heading tag="h3">A little about me</Heading>
        </div>
        <div>
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
      </section>
      <section className="container-xl">
        <Heading tag="h2">You're still here ?</Heading>
        <p>
          If you’re reading this, I’ve successfully caught your attention. Great
          ! I’m always open to discussing potential collaborations.
        </p>
        <Button>Let's work together</Button>
      </section>
      <section className="container-xl">
        <Heading tag="h2">Projects</Heading>
        <div>
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
