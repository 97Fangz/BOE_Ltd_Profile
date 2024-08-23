import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';

const ContactSectionContainer = styled.section`
  background-color: #f0f4f8;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactSection: React.FC = () => (
  <ContactSectionContainer>
    <SectionTitle>Get in Touch</SectionTitle>
    <CardGrid>
      <ContactCard
        icon="fa-brands fa-whatsapp"
        title="WhatsApp"
        content={["+254715119636"]}
        buttonText="Chat Now"
        buttonColor="#25d366"
        buttonHoverColor="#1e8e6f"
        buttonHref="https://wa.me/254715119636"
      />
      <ContactCard
        icon="fa fa-phone"
        title="Phone"
        content={["+254798877813", "+254715119636"]}
        buttonText="Call Now"
        buttonColor="#4a90e2"
        buttonHoverColor="#3a78c2"
        buttonHref="tel:+254798877813"
      />
      <ContactCard
        icon="fa fa-envelope"
        title="Email"
        content={["boelimited275@gmail.com"]}
        buttonText="Send Email"
        buttonColor="#f39c12"
        buttonHoverColor="#e67e22"
        buttonHref="mailto:boelimited275@gmail.com"
      />
      <ContactCard
        icon="fab fa-tiktok"
        title="TikTok"
        content={["Follow us for updates"]}
        buttonText="Follow"
        buttonColor="#000000"
        buttonHoverColor="#333333"
        buttonHref="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
      />
      <ContactCard
        icon="fa fa-location-dot"
        title="Location"
        content={["Mali Location", "Kenya Location"]}
        buttonText="View Map"
        buttonColor="#e74c3c"
        buttonHoverColor="#c0392b"
        buttonHref="https://www.google.com/maps/place/Mali"
      />
      <ContactCard
        icon="fab fa-instagram"
        title="Instagram"
        content={["Follow our latest posts"]}
        buttonText="Follow"
        buttonColor="#e4405f"
        buttonHoverColor="#c13584"
        buttonHref="https://www.instagram.com/boelimited"
      />
    </CardGrid>
  </ContactSectionContainer>
);

export default ContactSection;