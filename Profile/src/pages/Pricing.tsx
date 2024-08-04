import React from 'react';

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

// Remove the unused 'Pricing' component
// const Pricing: React.FC<PricingProps> = ({
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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Pricing Details</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Product Information</h2>
        <p><strong>Commodity:</strong> {commodity}</p>
        <p><strong>Form:</strong> {form}</p>
        <p><strong>Purity:</strong> {purity}</p>
        <p><strong>Origin:</strong> {origin}</p>
        <p><strong>Payment:</strong> {payment}</p>
        <p><strong>Carat:</strong> {carat}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Price:</strong> {price}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Payment Terms</h2>
        <p>{paymentTerms}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Agreement Duration</h2>
        <p>{agreementDuration}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sales and Delivery Procedure</h2>
        <ul className="list-disc ml-6">
          {procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Required Documentation</h2>
        <ul className="list-disc ml-6">
          {documentation.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Fees, Levies, and Duties</h2>
        <ul className="list-disc ml-6">
          {fees.map((fee, index) => (
            <li key={index}>{fee}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Visa Information</h2>
        <p>{visa}</p>
      </section>
    </div>
  );
};

export default Prici;
