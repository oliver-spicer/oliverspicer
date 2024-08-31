import { Section, Heading } from '@/features/misc';
import { ContactForm } from '@/features/contact';

export default function ContactSection() {
  return (
    <div className="flex flex-col h-screen">
      <Section.Gradient justify="justify-center">
        <Heading tag="h3">Contact</Heading>
        <div className="grow shrink basis-0 self-stretch">
          Besoin d'un développeur ? Contactez-moi !
          <ContactForm />
        </div>
      </Section.Gradient>
    </div>
  );
}
