// Invoice.tsx
import React, { useState } from 'react';

interface InvoiceProps {
  total: number;
  items: { name: string; price: number; quantity: number }[];
}

const Invoice: React.FC<InvoiceProps> = ({ total, items }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/payment');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold">Invoice</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
        <button 
          className={`mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
          onClick={handlePayment}
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default Invoice;
