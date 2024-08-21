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
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const ContactCard = styled.div`
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px; /* Adjust width as needed */
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 1rem auto;

  i {
    font-size: 2rem;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8;
  }

  i {
    margin-left: 0.5rem;
  }
`;

const PhoneButton = styled(ContactButton)`
  background-color: #28a745; /* Green */
  &:hover {
    background-color: #1e7e34;
  }
`;

const EmailButton = styled(ContactButton)`
  background-color: #ffcc00; /* Yellow */
  &:hover {
    background-color: #e0b800;
  }
`;

const TiktokButton = styled(ContactButton)`
  background-color: #000000; /* Black */
  color: #ffffff; /* Ensure text is visible */
  &:hover {
    background-color: #e60023; /* Red */
  }
`;

const LocationButton = styled(ContactButton)`
  background-color: #ff2a45; /* Red */
  &:hover {
    background-color: #cc1f33;
  }
`;

const Contact: React.FC = () => {
  return (
    <Section>
      <h2 className="text-center mb-4 border-b-2 border-amber-900 w-max mx-auto text-2xl text-amber-900 font-semibold">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any inquiries or need more information about our services,
        please reach out to us. Our expert brokers in Kenya are here to assist
        you with all your logistics needs, including the secure shipment of
        precious metals like gold.
      </p>
      <ContactContainer>
        <ContactCard>
          <IconWrapper>
            <i className="fa fa-phone" style={{ color: '#28a745' }}></i> {/* Green icon */}
          </IconWrapper>
          <h4 className="mb-3 text-amber-900">Phone Number</h4>
          <p className="mb-2 text-black">+254798877813</p>
          <p className="mb-4 text-black">+254715119636</p>
          <PhoneButton href="tel:+254798877813">
            Call Now <i className="fa fa-arrow-right"></i>
          </PhoneButton>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <i className="fa fa-envelope-open" style={{ color: '#ffcc00' }}></i> {/* Yellow icon */}
          </IconWrapper>
          <h4 className="mb-3 text-amber-900">Email Address</h4>
          <p className="mb-2 text-black">boelimited275@gmail.com</p>
          <EmailButton href="mailto:boelimited275@gmail.com">
            Email Now <i className="fa fa-arrow-right"></i>
          </EmailButton>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <i className="fab fa-tiktok fa-2x" style={{ color: '#111111' }}></i> {/* Ensure visibility */}
          </IconWrapper>
          <h4 className="mb-3 text-amber-900">Follow Us on TikTok</h4>
          <TiktokButton
            href="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok <i className="fa fa-arrow-right"></i>
          </TiktokButton>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <i className="fa fa-location-dot" style={{ color: '#ff2a45' }}></i> {/* Red icon */}
          </IconWrapper>
          <h4 className="mb-3 text-amber-900">Our Location</h4>
          <p className="mb-2 text-gray-700">Mali Location</p>
          <p className="mb-4 text-gray-700">Kenya Location</p>
          <LocationButton
            href="https://www.google.com/maps/place/Mali"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map <i className="fa fa-arrow-right"></i>
          </LocationButton>
        </ContactCard>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
