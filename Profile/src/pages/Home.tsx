import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Star, ShoppingCart, Clock, Shield, Globe, DollarSign } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock gold price data - replace with actual API integration
const mockHistoricalData = [
  { date: '2023-10', price: 1850 },
  { date: '2023-11', price: 1900 },
  { date: '2023-12', price: 1950 },
  { date: '2024-01', price: 2000 },
  { date: '2024-02', price: 2050 },
];

// Gold products data
const goldProducts = [
  {
    id: 1,
    name: "24K Gold Bar",
    weight: "1 kg",
    purity: "99.99%",
    price: 62500,
    image: "/api/placeholder/400/300",
    delivery: "2-3 business days",
    description: "Investment-grade gold bar with certification"
  },
  {
    id: 2,
    name: "22K Gold Bar",
    weight: "500 g",
    purity: "91.67%",
    price: 29800,
    image: "/api/placeholder/400/300",
    delivery: "2-3 business days",
    description: "Premium gold bar for serious investors"
  },
  {
    id: 3,
    name: "24K Gold Coins",
    weight: "100 g",
    purity: "99.99%",
    price: 6300,
    image: "/api/placeholder/400/300",
    delivery: "1-2 business days",
    description: "Collectible gold coins with highest purity"
  }
];

const LiveGoldPrice = () => {
  const [price, setPrice] = useState(2024.50);
  
  useEffect(() => {
    // Simulate live price updates
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() - 0.5) * 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">Live Gold Price</h3>
      <div className="text-3xl font-bold text-yellow-400">
        ${price.toFixed(2)}/oz
      </div>
      <p className="text-sm mt-2">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % goldProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + goldProducts.length) % goldProducts.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {goldProducts.map((product) => (
          <div key={product.id} className="min-w-full">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-blue-900">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-900">${product.price.toLocaleString()}</span>
                <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-900/50 p-2 text-white rounded-r">
        ←
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-900/50 p-2 text-white rounded-l">
        →
      </button>
    </div>
  );
};

const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow-lg">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="px-6 py-4">Product</th>
          <th className="px-6 py-4">Purity</th>
          <th className="px-6 py-4">Weight</th>
          <th className="px-6 py-4">Price</th>
          <th className="px-6 py-4">Delivery Time</th>
        </tr>
      </thead>
      <tbody>
        {goldProducts.map((product) => (
          <tr key={product.id} className="border-b hover:bg-blue-50 transition-colors">
            <td className="px-6 py-4">{product.name}</td>
            <td className="px-6 py-4">{product.purity}</td>
            <td className="px-6 py-4">{product.weight}</td>
            <td className="px-6 py-4">${product.price.toLocaleString()}</td>
            <td className="px-6 py-4">{product.delivery}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PriceChart = () => (
  <div className="h-80 bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-blue-900 mb-4">Historical Gold Prices</h3>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={mockHistoricalData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#FCD34D" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Newsletter = () => (
  <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4">Stay Updated with Gold Market Trends</h3>
    <p className="mb-6">Subscribe to our newsletter for daily gold price updates and market insights.</p>
    <form className="flex gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg text-gray-900"
      />
      <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
        Subscribe
      </button>
    </form>
  </div>
);

const PaymentMethods = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-blue-900 mb-4">Secure Payment Options</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 border rounded-lg text-center">
        <img src="/api/placeholder/80/50" alt="Visa" className="mx-auto mb-2" />
        <span>Visa</span>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <img src="/api/placeholder/80/50" alt="MasterCard" className="mx-auto mb-2" />
        <span>MasterCard</span>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <img src="/api/placeholder/80/50" alt="Bank Transfer" className="mx-auto mb-2" />
        <span>Bank Transfer</span>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <img src="/api/placeholder/80/50" alt="Crypto" className="mx-auto mb-2" />
        <span>Crypto</span>
      </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900"
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900"
          rows={4}
          placeholder="Your message"
        />
      </div>
      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
        Send Message
      </button>
    </form>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-8 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90" />
            <img src="/api/placeholder/1920/1080" alt="Gold bars background" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              Premium <span className="text-yellow-400">Gold</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10">
              Your trusted partner in gold investment and trading
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LiveGoldPrice />
              <div className="col-span-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <Shield className="w-8 h-8 text-yellow-400 mb-2" />
                    <h3 className="font-semibold">Secure</h3>
                    <p className="text-sm">100% Verified</p>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <Globe className="w-8 h-8 text-yellow-400 mb-2" />
                    <h3 className="font-semibold">Global</h3>
                    <p className="text-sm">Worldwide Delivery</p>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <DollarSign className="w-8 h-8 text-yellow-400 mb-2" />
                    <h3 className="font-semibold">Best Rates</h3>
                    <p className="text-sm">Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Featured Gold Products</h2>
          <ProductCarousel />
        </section>

        {/* Price Chart */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Gold Price Trends</h2>
          <PriceChart />
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Product Comparison</h2>
          <ComparisonTable />
        </section>

        {/* Payment Methods */}
        <PaymentMethods />

        {/* Newsletter */}
        <Newsletter />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;