// Invoice.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaLock } from 'react-icons/fa';

interface InvoiceProps {
  total: number;
  items: { name: string; price: number; quantity: number }[];
  onQuantityChange: (index: number, quantity: number) => void; // Add this prop
}

const Invoice: React.FC<InvoiceProps> = ({ total, items, onQuantityChange }) => {
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
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-900 text-white p-8">
        <h2 className="text-3xl font-bold">Invoice</h2>
        <p className="text-lg mt-2">Purchase Order #12345</p>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Gold Dory Bar</h3>
            <div className="flex items-center space-x-2 text-gray-500">
              <FaLock className="text-blue-500" />
              <span>Secure Checkout</span>
            </div>
          </div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(index, Number(e.target.value))}
                  className="border border-gray-300 rounded px-2 w-20"
                />
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">Total</span>
            <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          className={`mt-8 w-full py-3 px-6 bg-blue-500 text-white rounded-lg flex justify-center items-center space-x-2 ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
          onClick={handlePayment}
        >
          {isLoading ? (
            <>
              <span>Processing...</span>
              <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              <span>Pay Now</span>
              <FaChevronRight />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Invoice;
