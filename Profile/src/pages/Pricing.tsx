import React from 'react';
import './App.css'; // Assuming you have Tailwind CSS setup in App.css

const Pricing: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Gold Pricing and Sales Procedure</h1>
      </header>

      {/* Commodity Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Commodity Details</h2>
        <ul className="list-disc ml-6 mt-4">
          <li><strong>Commodity:</strong> AU (Gold Dory Bar)</li>
          <li><strong>Purity:</strong> 96%+</li>
          <li><strong>Origin:</strong> Mali</li>
          <li><strong>Carat:</strong> 22+</li>
          <li><strong>Quantity:</strong> 25kg to 500kg monthly delivery</li>
          <li><strong>Price:</strong> $55,000/kg</li>
        </ul>
      </section>

      {/* Pricing Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Pricing Information</h2>
        <p className="mt-4">
          <strong>Payment Terms:</strong> Wire Transfer
        </p>
        <p className="mt-4">
          <strong>Agreement Duration:</strong> One Year with Rolls and Extensions
        </p>
      </section>

      {/* Sales & Delivery Procedure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Sales & Delivery Procedure</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
          <li>
            We send a letter of invitation and a Visa to the buyer. Buyer then moves to Mali, if he wants the transactions to happen in his country.
          </li>
          <li>
            Seller provides the quantity of Gold requested to the Refinery. Buyer and Seller conduct assay at Refinery.
          </li>
          <li>
            Seller prepares the export documents. Buyer pays export taxes, which are 7% of the government fixed price ($60,000/kg).
          </li>
          <li>
            Seller provides Buyer with a collateral worth the export tax amount paid. Collateral is returned to seller after the transaction is completed.
          </li>
          <li>
            Seller’s representatives accompany the buyer with the goods to the final testing destination.
          </li>
          <li>
            After the final test, Buyer pays the remaining 93% of the full amount by bank transfer within 48 hours. The 7% paid as taxes will be deducted from the price of the goods after the final test.
          </li>
        </ol>
      </section>

      {/* Documentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Documentation</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Certificate of origin</li>
          <li>Certificate of ownership</li>
          <li>Assay report</li>
          <li>Signed commercial invoice</li>
          <li>Certificate of insurance</li>
          <li>Custom duties and tax clearance certificates</li>
          <li>Certificate of non-criminal origin</li>
          <li>Certificate of intention of exportation</li>
          <li>Full set Airway Bill, marked “Air Freight Prepaid”</li>
          <li>Type of airline, Flight number and date of arrival (ETD & ETA)</li>
        </ul>
      </section>

      {/* Fees, Levies, and Duties */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Fees, Levies, and Duties</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Buyer is responsible for government levies, taxes, export duties, insurance, and freight.</li>
          <li>Buyer is responsible for Customs Clearance and all expenses related to clearance and transportation of merchandise to Refinery in the destination of Buyer’s choice.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600">For more information, please contact us.</p>
      </footer>
    </div>
  );
};

export default Pricing;
