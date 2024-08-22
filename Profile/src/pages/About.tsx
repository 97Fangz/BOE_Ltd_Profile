import React from 'react';
import styled from 'styled-components';

// Container for the entire page
const PageContainer = styled.div`
  font-family: "Noto Serif", "Noto Sans", sans-serif;
  background-color: #fcfbf8;
  padding: 2rem 1rem;
  overflow-x: hidden;
`;

// Hero section for page title or background image
const HeroSection = styled.div`
  background-image: url("/Boelogo.jpeg");
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

// Main content section container
const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

// Title for each section
const SectionTitle = styled.h2`
  color: #1b180e;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f4a261;
  padding-bottom: 0.5rem;
`;

// Paragraph text for sections
const SectionText = styled.p`
  color: #1b180e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

// Grid layout for images
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

// Individual image item in grid
const ImageItem = styled.div`
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

// Container for contact information (e.g., WhatsApp, Phone, Email)
const ContactInfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

// Individual contact info card
const ContactCard = styled.div`
  flex: 1 1 300px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

// Icon wrapper for contact icons (e.g., WhatsApp, Email)
const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 50%;

  i {
    font-size: 2rem;
  }
`;

// Button styling for contact actions
const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8;
  }

  i {
    margin-left: 0.5rem;
  }
`;

// Specific styles for different contact buttons
const WhatsAppButton = styled(ContactButton)`
  background-color: #25d366;
  &:hover {
    background-color: #1ebe54;
  }
`;

const PhoneButton = styled(ContactButton)`
  background-color: #28a745;
  &:hover {
    background-color: #1e7e34;
  }
`;

const EmailButton = styled(ContactButton)`
  background-color: #ffcc00;
  &:hover {
    background-color: #e0b800;
  }
`;

const TiktokButton = styled(ContactButton)`
  background-color: #000000;
  &:hover {
    background-color: #e60023;
  }
`;

const LocationButton = styled(ContactButton)`
  background-color: #ff2a45;
  &:hover {
    background-color: #cc1f33;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <h1>Contact Us</h1>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Get in Touch</SectionTitle>
        <SectionText>
          We are here to assist you with any inquiries or concerns you may have. Feel free to reach out to us through any of the following channels.
        </SectionText>
      </ContentSection>

      <ContactInfoSection>
        <ContactCard>
          <IconWrapper>
            <i className="fa-brands fa-whatsapp" style={{ color: '#25d366' }}></i>
          </IconWrapper>
          <h4>WhatsApp</h4>
          <p>+254798877813</p>
          <WhatsAppButton href="https://wa.me/254798877813" target="_blank" rel="noopener noreferrer">
            Chat Now <i className="fa fa-arrow-right"></i>
          </WhatsAppButton>
        </ContactCard>

        <ContactCard>
          <IconWrapper>
            <i className="fa fa-phone" style={{ color: '#28a745' }}></i>
          </IconWrapper>
          <h4>Phone Number</h4>
          <p>+254798877813</p>
          <p>+254715119636</p>
          <PhoneButton href="tel:+254798877813">
            Call Now <i className="fa fa-arrow-right"></i>
          </PhoneButton>
        </ContactCard>

        <ContactCard>
          <IconWrapper>
            <i className="fa fa-envelope-open" style={{ color: '#ffcc00' }}></i>
          </IconWrapper>
          <h4>Email Address</h4>
          <p>boelimited275@gmail.com</p>
          <EmailButton href="mailto:boelimited275@gmail.com">
            Email Now <i className="fa fa-arrow-right"></i>
          </EmailButton>
        </ContactCard>

        <ContactCard>
          <IconWrapper>
            <i className="fab fa-tiktok" style={{ color: '#111111' }}></i>
          </IconWrapper>
          <h4>Follow Us on TikTok</h4>
          <TiktokButton href="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1" target="_blank" rel="noopener noreferrer">
            TikTok <i className="fa fa-arrow-right"></i>
          </TiktokButton>
        </ContactCard>

        <ContactCard>
          <IconWrapper>
            <i className="fa fa-location-dot" style={{ color: '#ff2a45' }}></i>
          </IconWrapper>
          <h4>Our Location</h4>
          <p>Mali Location</p>
          <p>Kenya Location</p>
          <LocationButton href="https://www.google.com/maps/place/Mali" target="_blank" rel="noopener noreferrer">
            View on Map <i className="fa fa-arrow-right"></i>
          </LocationButton>
        </ContactCard>
      </ContactInfoSection>
    </PageContainer>
  );
};

export default ContactPage;
