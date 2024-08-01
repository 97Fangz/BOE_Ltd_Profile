import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #fff;
`;

const Broker: React.FC = () => {
  return (
    <Section>
      <h2>Meet Our Broker</h2>
      <p>Our expert broker in Kenya has extensive experience in handling high-value shipments, ensuring the secure and efficient transport of goods worldwide. With a deep understanding of the logistics industry and a keen eye for detail, our broker excels in managing complex shipment requirements, particularly for precious metals like gold.</p>
      <p>For more information or to arrange a consultation, please contact us directly through our Contact page.</p>
    </Section>
  );
};

export default Broker;
