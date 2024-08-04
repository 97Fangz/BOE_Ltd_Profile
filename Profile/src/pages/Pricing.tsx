import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 2rem;
  max-width: 50rem;
  margin: 10px auto;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 1rem;
`;

const OrderedList = styled.ol`
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-top: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`;

const ListItem = styled.li`
  margin-top: 0.5rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #4a5568;
`;

const Pricing: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Title className='text-amber-900'>Gold Pricing and Sales Procedure</Title>
      </Header>

      {/* Commodity Details */}
      <Section>
        <SectionTitle>Commodity Details</SectionTitle>
        <List>
          <ListItem><strong>Commodity:</strong> AU (Gold Dory Bar)</ListItem>
          <ListItem><strong>Purity:</strong> 96%+</ListItem>
          <ListItem><strong>Origin:</strong> Mali</ListItem>
          <ListItem><strong>Carat:</strong> 22+</ListItem>
          <ListItem><strong>Quantity:</strong> 25kg to 500kg monthly delivery</ListItem>
          <ListItem><strong>Price:</strong> $55,000/kg</ListItem>
        </List>
      </Section>

      {/* Pricing Information */}
      <Section>
        <SectionTitle>Pricing Information</SectionTitle>
        <Paragraph>
          <strong>Payment Terms:</strong> Wire Transfer
        </Paragraph>
        <Paragraph>
          <strong>Agreement Duration:</strong> One Year with Rolls and Extensions
        </Paragraph>
      </Section>

      {/* Sales & Delivery Procedure */}
      <Section>
        <SectionTitle>Sales & Delivery Procedure</SectionTitle>
        <OrderedList>
          <ListItem>
            We send a letter of invitation and a Visa to the buyer. Buyer then moves to Mali, if he wants the transactions to happen in his country.
          </ListItem>
          <ListItem>
            Seller provides the quantity of Gold requested to the Refinery. Buyer and Seller conduct assay at Refinery.
          </ListItem>
          <ListItem>
            Seller prepares the export documents. Buyer pays export taxes, which are 7% of the government fixed price ($60,000/kg).
          </ListItem>
          <ListItem>
            Seller provides Buyer with a collateral worth the export tax amount paid. Collateral is returned to seller after the transaction is completed.
          </ListItem>
          <ListItem>
            Seller’s representatives accompany the buyer with the goods to the final testing destination.
          </ListItem>
          <ListItem>
            After the final test, Buyer pays the remaining 93% of the full amount by bank transfer within 48 hours. The 7% paid as taxes will be deducted from the price of the goods after the final test.
          </ListItem>
        </OrderedList>
      </Section>

      {/* Documentation */}
      <Section>
        <SectionTitle>Documentation</SectionTitle>
        <List>
          <ListItem>Certificate of origin</ListItem>
          <ListItem>Certificate of ownership</ListItem>
          <ListItem>Assay report</ListItem>
          <ListItem>Signed commercial invoice</ListItem>
          <ListItem>Certificate of insurance</ListItem>
          <ListItem>Custom duties and tax clearance certificates</ListItem>
          <ListItem>Certificate of non-criminal origin</ListItem>
          <ListItem>Certificate of intention of exportation</ListItem>
          <ListItem>Full set Airway Bill, marked “Air Freight Prepaid”</ListItem>
          <ListItem>Type of airline, Flight number and date of arrival (ETD & ETA)</ListItem>
        </List>
      </Section>

      {/* Fees, Levies, and Duties */}
      <Section>
        <SectionTitle>Fees, Levies, and Duties</SectionTitle>
        <List>
          <ListItem>Buyer is responsible for government levies, taxes, export duties, insurance, and freight.</ListItem>
          <ListItem>Buyer is responsible for Customs Clearance and all expenses related to clearance and transportation of merchandise to Refinery in the destination of Buyer’s choice.</ListItem>
        </List>
      </Section>

      {/* Footer */}
      <Footer>
        For more information, please contact us.
      </Footer>
    </Container>
  );
};

export default Pricing;
