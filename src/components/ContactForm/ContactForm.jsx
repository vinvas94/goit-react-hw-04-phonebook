import { nanoid } from 'nanoid';
import React, { useState } from 'react';

export const ContactForm = ({ onSubmit, title }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <label htmlFor={nameId}>
          Name
          <input
            style={{ marginLeft: '10px', marginRight: '10px' }}
            name="name"
            type="text"
            required
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={nameId}
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            style={{ marginLeft: '10px' }}
            name="number"
            type="tel"
            required
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={numberId}
          />
        </label>
        <button type="submit" style={{ marginLeft: '20px' }}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
