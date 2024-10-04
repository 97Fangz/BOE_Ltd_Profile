import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContactCard from './ContactCard';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ContactSectionContainer = styled.section`
  background: linear-gradient(135deg, #0033A0, #00254A, #FFD700, #0033A0);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 3rem 2rem;
  margin: 2rem auto;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #FFD700;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const StyledContactCard = styled(ContactCard)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <SectionTitle>Get in Touch</SectionTitle>
      <CardGrid>
        <StyledContactCard
          icon="fa-brands fa-whatsapp"
          title="WhatsApp"
          content={["+254715119636"]}
          buttonText="Chat Now"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="https://wa.me/254715119636"
        />
        <StyledContactCard
          icon="fa fa-phone"
          title="Phone"
          content={["+254798877813", "+254715119636"]}
          buttonText="Call Now"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="tel:+254798877813"
        />
        <StyledContactCard
          icon="fa fa-envelope"
          title="Email"
          content={["boelimited275@gmail.com"]}
          buttonText="Send Email"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="mailto:boelimited275@gmail.com"
        />
        <StyledContactCard
          icon="fab fa-tiktok"
          title="TikTok"
          content={["Follow us for updates"]}
          buttonText="Follow"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
        />
        <StyledContactCard
          icon="fa fa-location-dot"
          title="Location"
          content={["Mali Location", "Kenya Location"]}
          buttonText="View Map"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="https://www.google.com/maps/place/Mali"
        />
        <StyledContactCard
          icon="fab fa-instagram"
          title="Instagram"
          content={["Follow our latest posts"]}
          buttonText="Follow"
          buttonColor="#FFD700"
          buttonHoverColor="#F0C000"
          buttonHref="https://www.instagram.com/boelimited"
        />
      </CardGrid>
    </ContactSectionContainer>
  );
};

export default ContactSection;