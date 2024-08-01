import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
  background: #f0f0f0; /* Slightly lighter gray background */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Enhanced shadow effect */
  max-width: 800px;
  margin: 2rem auto; /* Center the section */
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #2c3e50; /* Dark blue text color */
  margin-bottom: 1.5rem;
  text-align: center; /* Center the heading text */
  border-bottom: 2px solid #3498db; /* Add a bottom border */
  padding-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555; /* Slightly lighter gray text color */
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify; /* Justify text for a cleaner look */
`;

const About: React.FC = () => {
  return (
    <Section>
      <Heading>About BOE Limited</Heading>
      <Paragraph>
        BOE Limited is a leading logistics company based in Kenya, providing top-tier shipment services across the globe. Founded on the principles of reliability and efficiency, we have built a reputation for delivering excellence in logistics and supply chain solutions.
      </Paragraph>
      <Paragraph>
        Our team includes expert brokers who specialize in handling high-value shipments, ensuring the secure and efficient transport of precious metals like gold. Our Kenyan brokerage team is renowned for their meticulous attention to detail and unparalleled expertise in navigating complex shipment requirements.
      </Paragraph>
      <Paragraph>
        Our mission is to provide comprehensive logistics solutions that exceed our clients' expectations, ensuring that their goods reach their destinations safely and on time.
      </Paragraph>
    </Section>
  );
};

export default About;