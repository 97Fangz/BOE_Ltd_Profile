import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &.phone {
    background-color: #0047ab;
  }

  &.email {
    background-color: #28a745;
  }

  &.tiktok {
    background-color: #ff2a45;
  }
`;

const Contact: React.FC = () => {
  return (
    <Section className="min-h-[50vh] my-4 bg-blue-50">
      <h2 className="text-center mb-4 border-b-2 border-amber-900 w-max mx-auto text-2xl text-amber-900 font-semibold">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any inquiries or need more information about our services,
        please reach out to us. Our expert brokers in Kenya are here to assist
        you with all your logistics needs, including the secure shipment of
        precious metals like gold.
      </p>
      <h3 className="text-sm font-semibold text-blue-900 mb-4">Contact us via the following:</h3>
      <ContactContainer>
        <ContactButton
          href="tel:+254798877813"
          className="phone flex items-center space-x-2"
        >
          <i className="fa fa-phone"></i>
          <span>+254798877813, +254715119636</span>
        </ContactButton>
        <ContactButton
          href="mailto:boelimited275@gmail.com"
          className="email flex items-center space-x-2"
        >
          <i className="fa-solid fa-envelope"></i>
          <span>boelimited275@gmail.com</span>
        </ContactButton>
        <ContactButton
          href="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok flex items-center space-x-2"
        >
          <i className="fa-brands fa-tiktok"></i>
          <span>TikTok</span>
        </ContactButton>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
