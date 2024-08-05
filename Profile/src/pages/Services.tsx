import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fff] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <h1 className='mx-auto mt-7 text-xl font-semibold text-amber-900 border-b-2 border-amber-900'>Our Services</h1>
      <div className="layout-container flex h-full grow flex-col">
        <div className="sm:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Our Services</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 flex-col rounded-lg border border-amber-300 bg-amber-200 p-4 items-center">
                <div className="text-amber-900" data-icon="Globe" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="amber" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z" />
                  </svg>
                </div>
                <h2 className="text-amber-900 text-base font-bold leading-tight">Worldwide Shipment</h2>
              </div>
              <div className="flex flex-1 gap-3 flex-col rounded-lg border border-amber-300 bg-amber-200 p-4 items-center">
                <div className="text-amber-900" data-icon="Boat" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M221.06,110.63,208,106.27V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.27l-13.06,4.36A16,16,0,0,0,24,125.82V160.1a7.73,7.73,0,0,0,.31,2.19c15.72,55.09,86.12,74.06,100.07,77.3a16.19,16.19,0,0,0,7.24,0c13.95-3.24,84.35-22.21,100.07-77.3a7.73,7.73,0,0,0,.31-2.19V125.82A16,16,0,0,0,221.06,110.63ZM64,56H192v44.93L130.53,80.41a8,8,0,0,0-5.06,0L64,100.93ZM216,158.94c-5.78,19-20.55,35.17-43.95,48.12A181.7,181.7,0,0,1,128,224a181.7,181.7,0,0,1-44-16.94C60.56,194.11,45.78,177.93,40,158.94V125.81l80-26.7V168a8,8,0,0,0,16,0V99.11l80,26.71Z" />
                  </svg>
                </div>
                <h2 className="text-amber-900 text-base font-bold leading-tight">FOB & CIF Terms</h2>
              </div>
              <div className="flex flex-1 gap-3 flex-col rounded-lg border border-amber-300 bg-amber-200 p-4 items-center">
                <div className="text-amber-900" data-icon="Bank" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z" />
                  </svg>
                </div>
                <h2 className="text-amber-900 text-base font-bold leading-tight">Payment Options</h2>
              </div>
              <div className="flex flex-1 gap-3 flex-col rounded-lg border border-amber-300 bg-amber-200 p-4 items-center">
                <div className="text-amber-900" data-icon="Gear" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-7.2-5.4,109.38,109.38,0,0,0-24.4,4.64,8,8,0,0,0-5.64,3.82l-15.28,23.16q-2.52,2.44-5.36,4.64L96.8,74.48a8,8,0,0,0-5.8,5.2,107.49,107.49,0,0,0-4.2,24.12,8,8,0,0,0,1.4,6.56l11.56,19.84a16.37,16.37,0,0,0,.6,1.36l-6.64,18.52a8,8,0,0,0,5.72,9.88l21.68,1.84a2.8,2.8,0,0,0,2.28-.84l16.76-17.52a8,8,0,0,0,1.52-8.52L170.72,140.72a107.64,107.64,0,0,0-4.4-18.28ZM128,144a16,16,0,1,1,16-16A16.05,16.05,0,0,1,128,144Zm67.2,1.2l-13.44,14.56a7.94,7.94,0,0,0-1.64,8.16l4.68,18.84-8.4,3.52a7.92,7.92,0,0,0-5.72-2.28l-17.2-1.44a2.68,2.68,0,0,0-2.28.76l-14.8,15.6a8,8,0,0,0-1.6,7.44l5.28,18.4-16.12,6.4a8,8,0,0,0-5.4,4.8l-9.08,19.72-19.76-9.44-4.6-19.68L78.48,156.8a8,8,0,0,0,5.76-5.44l1.6-6.88,18.52-13.56a8,8,0,0,0,2.4-8.48l-2.4-18.8,12.76-13.6a8,8,0,0,0,.8-8.8l-1.2-4.8,18.76-6.64a8,8,0,0,0,5.72-5.04l7.44-20.12,20.16,9.52,8.24,16.12a8,8,0,0,0,5.12,4.24l18.16,1.6,6.8-6.8a7.86,7.86,0,0,0,5.64-5.6l2.64-19.2L164,76.8a8,8,0,0,0-7.64-4.4,109.36,109.36,0,0,0-12.2,5.6l-20.8,12.8a8,8,0,0,0-4.24,7.2,108.56,108.56,0,0,0,5.2,23.4L126.96,108a8,8,0,0,0-5.8,5.6l-5.28,14.56a8,8,0,0,0,1.8,8.4l8.4,14.8a8,8,0,0,0,7.6,4.8l13.6-.4A7.87,7.87,0,0,0,195.2,145.2Z" />
                  </svg>
                </div>
                <h2 className="text-amber-900 text-base font-bold leading-tight">Assured Quality</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
