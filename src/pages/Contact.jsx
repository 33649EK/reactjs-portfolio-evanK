import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validate name and email fields when changes are made
  const validateField = (field, value) => {
    if (!value.trim()) {
      return `${field} required!`;
    }

    if (field === 'Email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(value)) {
        return 'Please enter a valid email';
      }
    }

    return '';
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(validateField('Name', value));
  };

  const handleNameBlur = () => {
    setNameError(validateField('Name', name));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(validateField('Email', value));
  };

  const handleEmailBlur = () => {
    setEmailError(validateField('Email', email));
  };

  return (
    <div className="contactForm">
      <h1 className="contactHeader">Contact Me</h1>
      <form>
        <label htmlFor="name">
          Name: {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />

        <label htmlFor="email">
          Email:{' '}
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
