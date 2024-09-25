import React from 'react';
import SectionWrapper from '../path/to/SectionWrapper'; // Adjust the import based on your file structure

const IndustriesSectionComponent = () => (
  <SectionWrapper
    title="Our Industries"
    icon={() => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 2a8 8 0 10-8 8 8 8 0 008-8zm1 11.25V10h1.75L10 12.25 8.25 10H10v3.25zm1.25-5.25H8.75V5h3.5v3.25z" clipRule="evenodd" />
      </svg>
    )}
  >
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-blue-800">Mining</h3>
        <p className="text-gray-600">
          BOE Limited pioneers in gold mining, extracting precious metals through responsible methods that prioritize sustainability. We ensure minimal environmental impact while maximizing the value of our operations. Our state-of-the-art mining facilities, coupled with deep expertise, enable us to contribute significantly to the global market.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-800">Logistics</h3>
        <p className="text-gray-600">
          Our logistics division operates with precision and reliability, providing secure and timely delivery services. We employ advanced tracking systems to ensure the safety of goods from departure to arrival, maintaining a strong network across the globe to meet diverse transportation needs.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-800">Real Estate</h3>
        <p className="text-gray-600">
          At BOE Limited, real estate isn't just about property; it's about creating value. From residential to commercial developments, we provide consultancy and project management services to craft spaces that foster community growth and economic vitality.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-800">Agriculture</h3>
        <p className="text-gray-600">
          Our agricultural initiatives focus on sustainability and innovation. We collaborate with local farmers, utilizing cutting-edge techniques to enhance productivity and deliver high-quality products to the market. BOE Limited supports food security and eco-friendly practices.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default IndustriesSectionComponent;
