import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #fff;
`;

const About: React.FC = () => {
  return (
    <Section>
      <h2>About BOE Limited</h2>
      <p>BOE Limited is a leading logistics company based in Kenya, providing top-tier shipment services across the globe. Founded on the principles of reliability and efficiency, we have built a reputation for delivering excellence in logistics and supply chain solutions.</p>
      <p>Our team includes expert brokers who specialize in handling high-value shipments, ensuring the secure and efficient transport of precious metals like gold. Our Kenyan brokerage team is renowned for their meticulous attention to detail and unparalleled expertise in navigating complex shipment requirements.</p>
      <p>Our mission is to provide comprehensive logistics solutions that exceed our clients' expectations, ensuring that their goods reach their destinations safely and on time.</p>
    </Section>
  );
};

export default About;
