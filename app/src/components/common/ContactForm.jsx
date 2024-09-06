import { useState } from 'react';
import axios from 'axios';
import { InputControl } from '@/features/contact';

export default function ContactForm(props) {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post(`http://localhost:3080/api/v1/contact`, data)
      .then((response) => {
        console.log('>>> Response : ', response);
      });
    return true;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setErrors((prev) => prev.filter((e) => e !== name));
    switch (name) {
      case 'name':
        if (value.length < 5) {
          setErrors((prev) => [...prev, name]);
        }
        break;
      case 'email':
        break;
      case 'message':
        if (value.length < 5) {
          setErrors((prev) => [...prev, name]);
        }
        break;
    }
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        name="name"
        label="Your name"
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={data.name}
        invalid={errors.includes('name')}
      />
      <InputControl
        name="email"
        label=" Your e-mail"
        type="email"
        placeholder="Enter your e-mail address"
        onChange={handleChange}
        value={data.email}
        invalid={errors.includes('email')}
      />
      <InputControl
        name="message"
        label="Your Message"
        placeholder="Enter your message"
        tag="textarea"
        onChange={handleChange}
        value={data.message}
        invalid={errors.includes('message')}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
