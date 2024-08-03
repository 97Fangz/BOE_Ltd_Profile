// src/pages/AboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold">BOE Limited</h1>
          <p className="mt-4 text-xl">Leading the way in earth minerals mining and sales</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-16 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="Image4Joe.jpg"
              alt="Founder Joel Chesiro"
              className="rounded-full w-40 h-40 shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold">About the Company</h2>
            <p className="mt-6 text-lg text-gray-700">
              BOE Limited was founded with a vision to revolutionize the mining industry. Our journey began in...
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6 lg:px-0 bg-white shadow-lg rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="flex flex-col lg:flex-row items-center justify-around mt-12">
          <div className="flex flex-col items-center max-w-sm">
            <img
              src="image1.jpeg"
              alt="Mining of earth minerals"
              className="w-48 h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
            <p className="mt-4 text-lg font-medium">Mining of earth minerals</p>
          </div>
          <div className="flex flex-col items-center max-w-sm mt-12 lg:mt-0">
            <img
              src="image2.jpeg"
              alt="Selling minerals (gold)"
              className="w-48 h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
            <p className="mt-4 text-lg font-medium">Selling minerals (gold)</p>
          </div>
          <div className="flex flex-col items-center max-w-sm mt-12 lg:mt-0">
            <img
              src="image3.jpeg"
              alt="Selling minerals (diamonds, gemstones)"
              className="w-48 h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
            <p className="mt-4 text-lg font-medium">Selling minerals (diamonds, gemstones)</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto py-16 px-6 lg:px-0 mt-12">
        <h2 className="text-3xl font-bold text-center">Key Achievements</h2>
        <ul className="list-disc list-inside mt-8 space-y-4 text-lg text-gray-700">
          <li>Expanded operations to 3 continents</li>
          <li>Won the Best Mining Company Award in 2022</li>
          <li>Increased annual revenue by 50% over the last 5 years</li>
        </ul>
      </section>

      {/* Management Team Section */}
      <section className="container mx-auto py-16 px-6 lg:px-0 mt-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center">Management Team</h2>
        <div className="flex flex-col items-center mt-12">
          <img
            src="Image4Joe.jpg"
            alt="Founder Joel Chesiro"
            className="rounded-full w-32 h-32 shadow-lg"
          />
          <p className="mt-4 text-xl font-semibold">Joel Chesiro</p>
          <p className="text-gray-600">Founder and CEO</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
