// src/pages/AboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">BOE Limited</h1>
          <p className="mt-2">Brief tagline or mission statement</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src="Image4Joe.jpg"
              alt="Founder Joel Chesiro"
              className="rounded-full w-32 h-32 mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
            <h2 className="text-2xl font-semibold">About the Company</h2>
            <p className="mt-4">
              Brief history of how the company started goes here...
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold text-center">Our Services</h2>
        <div className="flex flex-col lg:flex-row items-center justify-around mt-8">
          <div className="flex flex-col items-center">
            <img
              src="image1.jpeg"
              alt="Mining of earth minerals"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="mt-4">Mining of earth minerals</p>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <img
              src="image2.jpeg"
              alt="Selling minerals (gold)"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="mt-4">Selling minerals (gold)</p>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <img
              src="image3.jpeg"
              alt="Selling minerals (diamonds, gemstones)"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="mt-4">Selling minerals (diamonds, gemstones)</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto py-12 px-4 bg-white rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-semibold text-center">Key Achievements</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Achievement 1</li>
          <li>Achievement 2</li>
          <li>Achievement 3</li>
        </ul>
      </section>

      {/* Management Team Section */}
      <section className="container mx-auto py-12 px-4 mt-12">
        <h2 className="text-2xl font-semibold text-center">Management Team</h2>
        <div className="flex flex-col items-center mt-8">
          <img
            src="image.jpg"
            alt="Founder Joel Chesiro"
            className="rounded-full w-32 h-32"
          />
          <p className="mt-4 font-semibold">Joel Chesiro</p>
          <p>Founder and CEO</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
