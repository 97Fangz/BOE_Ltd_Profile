import React from 'react';
import styled from 'styled-components';

interface PricingProps {
  commodity: string;
  form: string;
  purity: string;
  origin: string;
  payment: string;
  carat: string;
  quantity: string;
  price: string;
  paymentTerms: string;
  agreementDuration: string;
  procedure: string[];
  documentation: string[];
  fees: string[];
  visa: string;
}

const Container = styled.div`
  @apply container mx-auto p-6;
`;

const Section = styled.section`
  @apply mb-6;
`;

const Title = styled.h2`
  @apply text-xl font-semibold;
`;

const List = styled.ul`
  @apply list-disc ml-6;
`;

const PricingPage: React.FC<PricingProps> = ({
  commodity,
  form,
  purity,
  origin,
  payment,
  carat,
  quantity,
  price,
  paymentTerms,
  agreementDuration,
  procedure,
  documentation,
  fees,
  visa,
}) => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Pricing Details</h1>

      <Section>
        <Title>Product Information</Title>
        <p><strong>Commodity:</strong> {commodity}</p>
        <p><strong>Form:</strong> {form}</p>
        <p><strong>Purity:</strong> {purity}</p>
        <p><strong>Origin:</strong> {origin}</p>
        <p><strong>Payment:</strong> {payment}</p>
        <p><strong>Carat:</strong> {carat}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Price:</strong> {price}</p>
      </Section>

      <Section>
        <Title>Payment Terms</Title>
        <p>{paymentTerms}</p>
      </Section>

      <Section>
        <Title>Agreement Duration</Title>
        <p>{agreementDuration}</p>
      </Section>

      <Section>
        <Title>Sales and Delivery Procedure</Title>
        <List>
          {procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Required Documentation</Title>
        <List>
          {documentation.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Fees, Levies, and Duties</Title>
        <List>
          {fees.map((fee, index) => (
            <li key={index}>{fee}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Visa Information</Title>
        <p>{visa}</p>
      </Section>
    </Container>
  );
};

export default PricingPage;
