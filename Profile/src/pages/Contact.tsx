import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 px-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center mb-8 border-b-4 border-amber-900 w-max mx-auto text-3xl text-amber-900 font-semibold">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        If you have any inquiries or need more information about our services,
        please reach out to us. Our expert brokers in Kenya are here to assist
        you with all your logistics needs, including the secure shipment of
        precious metals like gold.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
            <i className="fa-brands fa-whatsapp text-5xl text-green-500"></i>
          </div>
          <h4 className="mb-3 text-amber-900 text-xl font-semibold">WhatsApp</h4>
          <p className="mb-4 text-black">+254715119636</p>
          <a
            href="https://wa.me/254715119636"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
          >
            Chat Now <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="bg-white text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
            <i className="fa fa-phone text-5xl text-green-600"></i>
          </div>
          <h4 className="mb-3 text-amber-900 text-xl font-semibold">Phone Number</h4>
          <p className="mb-2 text-black">+254798877813</p>
          <p className="mb-4 text-black">+254715119636</p>
          <a
            href="tel:+254798877813"
            className="inline-flex items-center bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
          >
            Call Now <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="bg-white text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
            <i className="fa fa-envelope-open text-5xl text-yellow-500"></i>
          </div>
          <h4 className="mb-3 text-amber-900 text-xl font-semibold">Email Address</h4>
          <p className="mb-4 text-black">boelimited275@gmail.com</p>
          <a
            href="mailto:boelimited275@gmail.com"
            className="inline-flex items-center bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Email Now <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="bg-white text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
            <i className="fab fa-tiktok text-5xl text-black"></i>
          </div>
          <h4 className="mb-3 text-amber-900 text-xl font-semibold">Follow Us on TikTok</h4>
          <a
            href="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
          >
            TikTok <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="bg-white text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
            <i className="fa fa-location-dot text-5xl text-red-500"></i>
          </div>
          <h4 className="mb-3 text-amber-900 text-xl font-semibold">Our Location</h4>
          <p className="mb-2 text-gray-700">Mali Location</p>
          <p className="mb-4 text-gray-700">Kenya Location</p>
          <a
            href="https://www.google.com/maps/place/Mali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
          >
            View on Map <i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
