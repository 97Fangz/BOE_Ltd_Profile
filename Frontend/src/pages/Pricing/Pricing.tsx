import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
import CustomList from './List';
import CustomOrderedList from './OrderedList';
import Footer from './Footer';

const Container = styled.div`
  padding: 2rem;
  max-width: 60rem;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const Pricing: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <Section title="Commodity Details">
        <CustomList
          items={[
            'Commodity: AU (Gold Dory Bar)',
            'Purity: 96%+',
            'Origin: Mali',
            'Carat: 22+',
            'Quantity: 25kg to 500kg monthly delivery',
            'Price: $55,000/kg'
          ]}
        />
      </Section>

      <Section title="Pricing Information">
        <p><strong>Payment Terms:</strong> Wire Transfer</p>
        <p><strong>Agreement Duration:</strong> One Year with Rolls and Extensions</p>
      </Section>

      <Section title="Sales & Delivery Procedure">
        <CustomOrderedList
          items={[
            'We send a letter of invitation and a Visa to the buyer. Buyer then moves to Mali, if he wants the transactions to happen in his country.',
            'Seller provides the quantity of Gold requested to the Refinery. Buyer and Seller conduct assay at Refinery.',
            'Seller prepares the export documents. Buyer pays export taxes, which are 7% of the government fixed price ($60,000/kg).',
            'Seller provides Buyer with a collateral worth the export tax amount paid. Collateral is returned to seller after the transaction is completed.',
            'Seller’s representatives accompany the buyer with the goods to the final testing destination.',
            'After the final test, Buyer pays the remaining 93% of the full amount by bank transfer within 48 hours. The 7% paid as taxes will be deducted from the price of the goods after the final test.'
          ]}
        />
      </Section>

      <Section title="Documentation">
        <CustomList
          items={[
            'Certificate of origin',
            'Certificate of ownership',
            'Assay report',
            'Signed commercial invoice',
            'Certificate of insurance',
            'Custom duties and tax clearance certificates',
            'Certificate of non-criminal origin',
            'Certificate of intention of exportation',
            'Full set Airway Bill, marked “Air Freight Prepaid”',
            'Type of airline, Flight number and date of arrival (ETD & ETA)'
          ]}
        />
      </Section>

      <Section title="Fees, Levies, and Duties">
        <CustomList
          items={[
            'Buyer is responsible for government levies, taxes, export duties, insurance, and freight.',
            'Buyer is responsible for Customs Clearance and all expenses related to clearance and transportation of merchandise to Refinery in the destination of Buyer’s choice.'
          ]}
        />
      </Section>

      <Footer />
    </Container>
  );
};

export default Pricing;
