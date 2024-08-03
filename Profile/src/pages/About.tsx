// src/pages/AboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
        />
        <title>BOE Limited</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
        <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
          <div className="flex h-full grow flex-col">
            {/* Header Section */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
              <div className="flex items-center gap-4 text-[#111517]">
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em]">Rare Earth Minerals</h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">About</a>
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Services</a>
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Products</a>
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Sustainability</a>
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Investors</a>
                  <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Careers</a>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1a73bc] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Contact Us</span>
                </button>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="flex flex-col max-w-[960px] flex-1">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-xl" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/730b0597-a051-4e9e-bd61-2e2e2edd900f.png")' }}>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] text-center">We are a global leader in the mining and selling of rare earth minerals. Our mission is to provide the world with the resources it needs to build a sustainable future.</h1>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1a73bc] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
              </div>
            </div>

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
        </div>
      </body>
    </>
  );
};

export default About
