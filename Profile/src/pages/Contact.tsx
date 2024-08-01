import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 1rem 0;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Contact: React.FC = () => {
  return (
    <Section>
      <h2>Contact Us</h2>
      <p>If you have any inquiries or need more information about our services, please reach out to us. Our expert brokers in Kenya are here to assist you with all your logistics needs, including the secure shipment of precious metals like gold.</p>
      <Form>
        <Label>
          Name:
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Message:
          <Textarea name="message"></Textarea>
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Section>
  );
};

export default Contact;
