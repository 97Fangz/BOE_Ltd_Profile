import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

interface InvoiceProps {
  total: number;
  items: { name: string; price: number; quantity: number }[];
}

const Invoice: React.FC<InvoiceProps> = ({ total, items }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/payment');
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-blue-900 text-white p-6">
        <CardTitle className="text-2xl font-bold">Invoice</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
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
            <span className="text-lg font-bold text-blue-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-6">
        <Button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          {isLoading ? (
            'Processing...'
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Invoice;