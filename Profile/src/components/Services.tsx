import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #fff;
`;

// Remove the declaration of ServiceList

const ServiceItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
`;

const Services: React.FC = () => {
  return (
    <Section>
      <div className="relative flex size-full min-h-screen flex-col bg-[#111517] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/4c3cbb1a-094e-461f-b7d1-fb4ce8d1edbc.png")' }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Global Logistics Solutions
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        BOE Limited offers a wide range of services including worldwide shipment, FOB & CIF terms, payment options, supply chain management, warehousing and storage solutions, worldwide freight transportation, secure transport of precious metals, and specialized brokerage
                      </h2>
                    </div>
                    <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div className="text-[#9eacb7] flex border border-[#3d4852] bg-[#1c2226] items-center justify-center pl-[15px] rounded-l-xl border-r-0" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                          </svg>
                        </div>
                        <input
                          placeholder="Enter your email to get started"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d4852] bg-[#1c2226] focus:border-[#3d4852] h-full placeholder:text-[#9eacb7] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                          value=""
                        />
                        <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#3d4852] bg-[#1c2226] pr-[7px]">
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2c90e2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                            <span className="truncate">Get a Quote</span>
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Our Services</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {/* Repeat ServiceItem for each service */}
                <ServiceItem>
                  <div className="text-white" data-icon="Globe" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-base font-bold leading-tight">Worldwide Shipment</h2>
                </ServiceItem>
                <ServiceItem>
                  <div className="text-white" data-icon="Boat" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      {/* Replace with appropriate SVG path */}
                      <path d="M0,0H256V256H0Z" fill="none"/>
                    </svg>
                  </div>
                  <h2 className="text-white text-base font-bold leading-tight">Secure Transport of Precious Metals</h2>
                </ServiceItem>
                <ServiceItem>
                  <div className="text-white" data-icon="Compass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM124,48a8,8,0,0,1,8,8V88h24a8,8,0,0,1,0,16H136v24a8,8,0,0,1-16,0V104H96a8,8,0,0,1,0-16h24V56A8,8,0,0,1,124,48ZM128,216a8,8,0,0,1-8-8V168H96a8,8,0,0,1,0-16h24V128a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16h-24v24A8,8,0,0,1,128,216ZM232,128A104.12,104.12,0,0,0,128,24a104.12,104.12,0,0,0-104,104A104.12,104.12,0,0,0,128,232a104.12,104.12,0,0,0,104-104ZM184,128a56,56,0,1,1-56-56A56.06,56.06,0,0,1,184,128Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-base font-bold leading-tight">Specialized Brokerage</h2>
                </ServiceItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
