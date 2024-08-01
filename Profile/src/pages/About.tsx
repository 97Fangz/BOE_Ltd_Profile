import React from 'react';
import styled from 'styled-components';

Certainly! Let's enhance the UI layout for your "About BOE Limited" section. I'll provide a more visually appealing design using styled components. Below, you'll find an improved version of your `About` component with better styling:

```jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #f9f9f9; /* Light gray background */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  color: #333; /* Dark gray text color */
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555; /* Slightly lighter gray text color */
  line-height: 1.6;
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
