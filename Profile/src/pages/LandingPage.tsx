import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShoppingCart, Award, Truck, DollarSign } from 'lucide-react';

interface GoldPriceData {
  date: string;
  price: number;
}

const GoldPriceChart = ({ data }: { data: GoldPriceData[] }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#FFD700" />
    </LineChart>
  </ResponsiveContainer>
);

const ProductCard = ({ name, purity, origin, price }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 m-4">
    <DollarSign className="text-yellow-500 w-12 h-12 mb-4" />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p>Purity: {purity}</p>
    <p>Origin: {origin}</p>
    <p className="text-lg font-semibold mt-2">${price.toFixed(2)}/kg</p>
    <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">
      Buy Now
    </button>
  </div>
);

const LandingPage = () => {
  const [goldPrice, setGoldPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulating API call for live gold price
    const fetchGoldPrice = () => {
      const price = 55000 + Math.random() * 1000;
      setGoldPrice(price);
    };
    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const mockChartData = [
    { date: '2024-10-15', price: 54800 },
    { date: '2024-10-16', price: 55200 },
    { date: '2024-10-17', price: 55100 },
    { date: '2024-10-18', price: 55500 },
    { date: '2024-10-19', price: 55300 },
    { date: '2024-10-20', price: 55400 },
    { date: '2024-10-21', price: goldPrice },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-4xl font-bold">BOE Limited</h1>
        <p className="text-xl mt-2">Premium Gold Solutions for a Prosperous Future</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Live Gold Prices</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold mb-4">Current Gold Price: ${goldPrice.toFixed(2)}/kg</p>
            <GoldPriceChart data={mockChartData} />
            <div className="mt-6">
              <label htmlFor="quantity" className="block mb-2">Quantity (kg):</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="border rounded px-2 py-1 w-24"
              />
              <p className="text-xl font-bold mt-4">
                Total Price: ${(goldPrice * quantity).toFixed(2)}
              </p>
              <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                Purchase Now
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard name="Gold Bar" purity="99.99%" origin="Mali" price={goldPrice} />
            <ProductCard name="Gold Coin" purity="99.9%" origin="International" price={goldPrice * 1.05} />
            <ProductCard name="Gold Nugget" purity="96%" origin="Mali" price={goldPrice * 0.98} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose BOE Limited?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <ShoppingCart className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p>State-of-the-art security for all your purchases</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Award className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p>Certified gold products of the highest purity</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Truck className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Delivery</h3>
              <p>Secure and insured delivery worldwide</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white p-6 mt-12">
        <p>&copy; 2024 BOE Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;