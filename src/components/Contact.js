// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      e.target, 
      'YOUR_USER_ID'
    ).then((result) => {
        alert('Message sent successfully!');
    }, (error) => {
        alert('Failed to send the message, please try again.');
    });

    setFormData({ name: '', emailOrNumber: '', message: '' });
  };

  return (
    <ContactContainer>
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="emailOrNumber"
          placeholder="Email or Number"
          value={formData.emailOrNumber}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      <ContactInfo>
        <p>
          <strong>Phone/WhatsApp:</strong>
          <ContactLink href="https://wa.me/03055674767" target="_blank" rel="noopener noreferrer"> 0305-5674767</ContactLink>
        </p>
        <p>
          <strong>Email:</strong>
          <ContactLink href="mailto:abdullahalvi431@gmail.com" target="_blank" rel="noopener noreferrer"> abdullahalvi431@gmail.com</ContactLink>
        </p>
        <p>
          <strong>Second Email:</strong>
          <ContactLink href="mailto:abdullahmshahid09@gmail.com" target="_blank" rel="noopener noreferrer"> abdullahmshahid09@gmail.com</ContactLink>
        </p>
      </ContactInfo>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1c1c1c;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  min-height: 100px;
  resize: vertical;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #00aaff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0088cc;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContactLink = styled.a`
  color: #00aaff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Contact;
