import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  background-color: #e6f6e6;
  padding: 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  background-color: #ffd700;
  color: #0047ab;
  font-weight: bold;

  i {
    margin-right: 0.5rem;
    color: #0047ab;
  }
`;

const Contact: React.FC = () => {
  return (
    <Section className="min-h-[50vh] my-4 bg-blue-50">
      <h2 className="text-center mb-4 border-b-2 border-amber-900 w-max mx-auto text-2xl text-amber-900 font-semibold">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any inquiries or need more information about our services,
        please reach out to us. Our expert brokers in Kenya are here to assist
        you with all your logistics needs, including the secure shipment of
        precious metals like gold.
      </p>
      <h3 className="text-sm font-semibold text-blue-900 mb-4">Contact us via the following:</h3>
      <ContactContainer>
        <ContactItem>
          <button
  class="middle none center w-full rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">
  Button
</button>
<div class="w-full pt-5 px-4 mb-8 mx-auto ">
    <div class="text-sm text-gray-700 py-1">
        Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/button?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>

<!-- stylesheet -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>

<!-- Ripple Effect from cdn -->
<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        </ContactItem>
        <ContactItem>
          <i className="fa-solid fa-envelope"></i>
          <p>boelimited275@gmail.com</p>
        </ContactItem>
        <ContactItem>
          <i className="fa-brands fa-tiktok"></i>
          <p>
            <a
              href="https://www.tiktok.com/@boelimited?_t=8oJpZoCT0bt&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline"
            >
              TikTok
            </a>
          </p>
        </ContactItem>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
