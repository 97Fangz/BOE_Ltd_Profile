import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Page Container Styling
const PageContainer = styled.div`
  font-family: "Noto Serif", "Noto Sans", sans-serif;
  background-color: #fcfbf8;
  padding: 2rem 1rem;
  overflow-x: hidden;
`;

// Hero Section Styling
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

// Content Section Styling
const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

// Section Title Styling
const SectionTitle = styled.h2`
  color: #1b180e;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f4a261;
  padding-bottom: 0.5rem;
`;

// Section Text Styling
const SectionText = styled.p`
  color: #1b180e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

// Image Grid Styling
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

// Image Item Styling
const ImageItem = styled.div`
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

// Team Section Styling
const TeamSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fcfbf8;
  padding: 1rem;
  border-radius: 8px;
`;

// Team Image Styling
const TeamImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

// Team Text Styling
const TeamText = styled.div`
  flex: 1;
`;

// Download Section Styling
const DownloadSection = styled(ContentSection)`
  background-color: #fcfbf8;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  border: 2px solid #f4a261;
`;

// Guidance Text Styling
const GuidanceText = styled(SectionText)`
  max-width: 600px;
  margin: 0 auto 1.5rem;
`;

// Download Button Styling
const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #f4a261;
  color: #1b180e;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #e76f51;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

// About Page Component
const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <h1>About Us</h1>
      </HeroSection>
      <ContentSection>
        <SectionTitle>About the Company</SectionTitle>
        <SectionText>
          BOE Limited is a premier mineral mining and selling company founded in 2023. Specializing in gold, diamonds, gemstones, and other minerals, we are a trusted source for high-quality minerals.
        </SectionText>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Brief History</SectionTitle>
        <SectionText>
          Founded in 2023 by Joel Chesiro, BOE Limited has quickly established itself as a leading provider of high-quality minerals. Known for our commitment to excellence and integrity, we strive to offer the best products and services to our clients.
        </SectionText>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Our Services</SectionTitle>
        <SectionText>
          We provide a comprehensive range of services including the mining and sale of gold, diamonds, gemstones, and other minerals. Our consulting services help clients maximize the value of their mineral assets.
        </SectionText>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Gallery</SectionTitle>
        <ImageGrid>
          <ImageItem style={{ backgroundImage: 'url("/image1.jpeg")' }} />
          <ImageItem style={{ backgroundImage: 'url("/image2.jpeg")' }} />
          <ImageItem style={{ backgroundImage: 'url("/image3.jpeg")' }} />
        </ImageGrid>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Key Achievements</SectionTitle>
        <SectionText>
          BOE Limited has achieved numerous milestones, recognized for excellence and innovation. Our products are used across various applications, including jewelry and electronics. We are proud of our accomplishments and look forward to continuing to serve our customers.
        </SectionText>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Management Team</SectionTitle>
        <TeamSection>
          <TeamImage style={{ backgroundImage: 'url("/Image4Joe.jpg")' }} />
          <TeamText>
            <p className="text-[#1b180e] text-base font-medium leading-normal">Joel Chesiro</p>
            <p className="text-[#97864e] text-sm font-normal leading-normal">Founder</p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.instagram.com/boelimited" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-[#97864e] fa-lg"></i>
              </a>
              <a href="https://wa.me/254715119636" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp text-[#97864e] fa-lg"></i>
              </a>
            </div>
          </TeamText>
        </TeamSection>
      </ContentSection>
      <DownloadSection>
        <SectionTitle>Download Our Company Profile</SectionTitle>
        <GuidanceText>
          For a detailed overview of our services, history, and key achievements, download our company profile.
        </GuidanceText>
        <DownloadButton
          href="/path-to-your-company-profile.pdf"
          download="BOE_Limited_Company_Profile.pdf"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Profile
        </DownloadButton>
      </DownloadSection>
    </PageContainer>
  );
};

export default AboutPage;