import { useState } from 'react';
import styles from './ContactForm.module.scss';
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
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={submit}>
      <div className="row">
        <div className="col">
          <label htmlFor="firstname">
            Firstname
            <input
              id="firstname"
              type="text"
              value={contact.firstname}
              onChange={change}
              placeholder="Jean"
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="lastname">
            Lastname
            <input
              id="lastname"
              type="text"
              value={contact.lastname}
              onChange={change}
              placeholder="Dupont"
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              value={contact.email}
              onChange={change}
              placeholder="hello@jeandupont.com"
            />
          </label>
        </div>
      </div>
      <div className="row">
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            value={contact.message}
            onChange={change}
            placeholder="Write your message here"
            rows="8"
          ></textarea>
        </label>
      </div>
    </form>
  );
}
