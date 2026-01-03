import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: white;
  padding: 3rem 1rem 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fbbf24;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: start;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
  
  svg {
    flex-shrink: 0;
    margin-top: 0.125rem;
    color: #fbbf24;
  }
`;

const ContactLink = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fbbf24;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fbbf24;
    transform: translateY(-3px);
    
    svg {
      color: #1e3a8a;
    }
  }
  
  svg {
    color: white;
  }
`;

const LegalText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e5e7eb;
  margin-bottom: 0.75rem;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0 1.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #d1d5db;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
`;

const Tagline = styled.p`
  font-weight: 600;
  color: #fbbf24;
  font-style: italic;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Company Information */}
        <FooterSection>
          <SectionTitle>BOE Minerals</SectionTitle>
          <LegalText>
            BOE Minerals is the commercial brand of <strong>BOE MINERALS LIMITED</strong>, 
            a legally registered and compliant entity operating under applicable 
            Kenyan and international regulations.
          </LegalText>
          <Tagline>BOE Minerals — Best of Earth.</Tagline>
        </FooterSection>

        {/* Contact Information */}
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactItem>
            <Phone size={18} />
            <div>
              <ContactLink href="tel:+254715119636">+254 715 119 636</ContactLink>
              <br />
              <ContactLink href="https://wa.me/254715119636" target="_blank" rel="noopener noreferrer">
                WhatsApp Available
              </ContactLink>
            </div>
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            <ContactLink href="mailto:info@boeminerals.com">info@boeminerals.com</ContactLink>
          </ContactItem>
          <ContactItem>
            <MapPin size={18} />
            <span style={{ color: '#e5e7eb' }}>Nairobi, Kenya</span>
          </ContactItem>
        </FooterSection>

        {/* Social Media & Additional Links */}
        <FooterSection>
          <SectionTitle>Connect With Us</SectionTitle>
          <LegalText>Follow us on social media for updates and insights.</LegalText>
          <SocialLinks>
            <SocialIcon href="https://www.instagram.com/boelimited" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/company/boeminerals" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Divider />

      <BottomBar>
        <p>&copy; {new Date().getFullYear()} BOE Minerals. All rights reserved.</p>
        <p>Delivering Excellence from Africa to the World</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;