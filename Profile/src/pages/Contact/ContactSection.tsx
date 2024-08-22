import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const ContactSection: React.FC = () => {
  return (
    <ContactContainer>
      <ContactCard
        icon="fa-brands fa-whatsapp"
        title="WhatsApp"
        content={["+254798877813"]}
        buttonText="Chat Now"
        buttonColor="#25d366"
        buttonHref="https://wa.me/254798877813"
      />
      <ContactCard
        icon="fa fa-phone"
        title="Phone Number"
        content={["+254798877813", "+254715119636"]}
        buttonText="Call Now"
        buttonColor="#28a745"
        buttonHref="tel:+254798877813"
      />
      <ContactCard
        icon="fa fa-envelope-open"
        title="Email Address"
        content={["boelimited275@gmail.com"]}
        buttonText="Email Now"
        buttonColor="#ffcc00"
        buttonHref="mailto:boelimited275@gmail.com"
      />
      <ContactCard
        icon="fab fa-tiktok fa-2x"
        title="Follow Us on TikTok"
        content={[]}
        buttonText="TikTok"
        buttonColor="#000000"
        buttonHref="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
      />
      <ContactCard
        icon="fa fa-location-dot"
        title="Our Location"
        content={["Mali Location", "Kenya Location"]}
        buttonText="View on Map"
        buttonColor="#ff2a45"
        buttonHref="https://www.google.com/maps/place/Mali"
      />
    </ContactContainer>
  );
};

export default ContactSection;
