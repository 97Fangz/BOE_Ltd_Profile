import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  font-family: "Noto Serif", "Noto Sans", sans-serif;
  background-color: #fcfbf8;
  padding: 2rem 1rem;
  overflow-x: hidden;
`;

 background-image: url("/l");
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

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #1b180e;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f4a261;
  padding-bottom: 0.5rem;
`;

const SectionText = styled.p`
  color: #1b180e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ImageItem = styled.div`
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

const TeamSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fcfbf8;
  padding: 1rem;
  border-radius: 8px;
`;

const TeamImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const TeamText = styled.div`
  flex: 1;
`;

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
          </TeamText>
        </TeamSection>
      </ContentSection>
    </PageContainer>
  );
};

export default AboutPage;
