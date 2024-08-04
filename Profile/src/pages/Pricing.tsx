import React from 'react';
import styled from 'styled-components';

// Ensure Tailwind CSS is properly set up in your project

const Container = styled.div`
  @apply relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-sans;
`;

const LayoutContainer = styled.div`
  @apply flex h-full grow flex-col;
`;

const ContentContainer = styled.div`
  @apply px-40 flex flex-1 justify-center py-5;
`;

const InnerContent = styled.div`
  @apply flex flex-col max-w-[960px] flex-1;
`;

const SectionTitle = styled.h3`
  @apply text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4;
`;

const InputContainer = styled.div`
  @apply flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3;
`;

const InputField = styled.input`
  @apply form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181611] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f0] focus:border-none h-14 placeholder:text-[#887f63] p-4 text-base font-normal leading-normal;
`;

const ProcedureStep = styled.div`
  @apply flex flex-1 flex-col py-3;
`;

const ProcedureTimeline = styled.div`
  @apply grid grid-cols-[40px_1fr] gap-x-2 px-4;
`;

const TimelinePoint = styled.div`
  @apply flex flex-col items-center gap-1;
`;

const TimelineLine = styled.div`
  @apply w-[1.5px] bg-[#e5e3dc] h-4;
`;

const Pricing: React.FC = () => {
  return (
    <Container>
      <LayoutContainer>
        <ContentContainer>
          <InnerContent>
            <SectionTitle>Product Information</SectionTitle>
            <InputContainer>
              <label>
                <InputField placeholder="Form" />
              </label>
              <label>
                <InputField placeholder="Purity" />
              </label>
            </InputContainer>
            <InputContainer>
              <label>
                <InputField placeholder="Origin" />
              </label>
              <label>
                <InputField placeholder="Payment method" />
              </label>
            </InputContainer>
            <InputContainer>
              <label>
                <InputField placeholder="Carat" />
              </label>
              <label>
                <InputField placeholder="Quantity" />
              </label>
            </InputContainer>
            <InputContainer>
              <label>
                <InputField placeholder="Price" />
              </label>
            </InputContainer>

            <SectionTitle>Payment Terms</SectionTitle>
            <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Payment will be made in the form of a wire transfer to the Seller's bank account within 3 business days after the Buyer has received the goods and signed the
              inspection report. The Buyer shall not withhold any payment due to the Seller.
            </p>

            <SectionTitle>Agreement Duration</SectionTitle>
            <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
              This Agreement shall be effective as of the date first above written and shall continue in full force and effect until such time as all obligations of the Parties
              have been fulfilled or otherwise terminated pursuant to the terms of this Agreement.
            </p>

            <SectionTitle>Sales and Delivery Procedure</SectionTitle>
            <ProcedureTimeline>
              <TimelinePoint>
                <div className="size-2 rounded-full bg-[#181611]"></div>
                <TimelineLine className="grow"></TimelineLine>
              </TimelinePoint>
              <ProcedureStep>
                <p className="text-[#181611] text-base font-medium leading-normal">The buyer and seller sign the contract</p>
                <p className="text-[#887f63] text-base font-normal leading-normal">Day 1</p>
              </ProcedureStep>
              <TimelinePoint>
                <TimelineLine></TimelineLine>
                <div className="size-2 rounded-full bg-[#181611]"></div>
                <TimelineLine className="grow"></TimelineLine>
              </TimelinePoint>
              <ProcedureStep>
                <p className="text-[#181611] text-base font-medium leading-normal">The buyer pays the seller a 10% deposit, which is deducted from the payment</p>
                <p className="text-[#887f63] text-base font-normal leading-normal">Day 2</p>
              </ProcedureStep>
              <TimelinePoint>
                <TimelineLine></TimelineLine>
                <div className="size-2 rounded-full bg-[#181611]"></div>
                <TimelineLine className="grow"></TimelineLine>
              </TimelinePoint>
              <ProcedureStep>
                <p className="text-[#181611] text-base font-medium leading-normal">The seller delivers the goods to the buyer's warehouse, and the buyer pays the seller the balance</p>
                <p className="text-[#887f63] text-base font-normal leading-normal">Day 3</p>
              </ProcedureStep>
              <TimelinePoint>
                <TimelineLine></TimelineLine>
                <div className="size-2 rounded-full bg-[#181611]"></div>
              </TimelinePoint>
              <ProcedureStep>
                <p className="text-[#181611] text-base font-medium leading-normal">The buyer inspects the goods and signs the inspection report</p>
                <p className="text-[#887f63] text-base font-normal leading-normal">Day 4</p>
              </ProcedureStep>
            </ProcedureTimeline>

            <SectionTitle>Required Documentation</SectionTitle>
            <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
              The Seller shall provide the Buyer with the following documents within 3 working days after the delivery of the goods: 1. Original invoice; 2. Certificate of origin;
              3. Packing list; 4. Certificate of quality and weight issued by a third-party testing agency; 5. Certificate of ownership; 6. Export customs declaration form.
            </p>

            <SectionTitle>Fees, Levies, and Duties</SectionTitle>
            <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
              The Buyer shall be responsible for all taxes, fees, levies, and duties associated with the importation of the goods. The Buyer shall pay the Seller an additional 10%
              of the purchase price to cover the Seller's administrative expenses.
            </p>

            <SectionTitle>Visa Information</SectionTitle>
            <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
              The Seller's representative shall obtain a business visa from the relevant authorities prior to visiting the Buyer's location. The Buyer shall be responsible for all
              costs associated with obtaining the visa, including but not limited to application fees, processing fees, and travel expenses.
            </p>
          </InnerContent>
        </ContentContainer>
      </LayoutContainer>
    </Container>
  );
};

export default Pricing;
