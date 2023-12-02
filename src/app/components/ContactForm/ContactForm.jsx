import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Input from './Input';
export default function ContactForm() {
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const submit = (e) => {
    e.preventDefault();
  };

  const change = (e) => {
    console.log(e.target);
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log(contact);
  };
  return (
    <form className={styles.form} onSubmit={submit}>
      <div className="row">
        <div className="col">
          <Input
            id="firstname"
            label="First Name"
            value={contact.firstname}
            onChange={change}
          />
        </div>
        <div className="col">
          <Input
            id="lastname"
            label="Last Name"
            value={contact.lastname}
            onChange={change}
          />
        </div>
        <div className="col">
          <Input
            id="email"
            label="Email"
            value={contact.email}
            onChange={change}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Input
            id="message"
            label="Message"
            value={contact.message}
            onChange={change}
            type="textarea"
          />
        </div>
      </div>
    </form>
  );
}
