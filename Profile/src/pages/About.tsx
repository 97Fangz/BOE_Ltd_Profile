import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#fcfbf8] @[480px]:rounded-xl min-h-[218px]"
                  style={{ backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgold-mining&psig=AOvVaw0LSsFv2EIi5dzjCgbPVAoH&ust=1722809157391000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLimw7Lq2YcDFQAAAAAdAAAAABAE")' }}
                ></div>
              </div>
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{ backgroundImage: 'url("/Image4Joe.jpg")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em]">Mineral Co.</p>
                    <p className="text-[#97864e] text-base font-normal leading-normal">Mining &amp; selling minerals</p>
                    <p className="text-[#97864e] text-base font-normal leading-normal">Founded in 1990, 100-500 employees</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About the company</h2>
            <p className="text-[#1b180e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Mineral Co. is a mineral mining and selling company founded in 1990. We mine and sell gold, diamonds, gemstones, and other minerals. We are a trusted source for
              high-quality minerals. Our company has 100-500 employees and is headquartered in San Francisco, CA.
            </p>
            <h2 className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Brief history</h2>
            <p className="text-[#1b180e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Mineral Co. was founded in 1990 by John Smith. Since then, we have become a leading provider of high-quality minerals. We have a reputation for excellence and
              integrity. We are committed to providing our customers with the best products and services.
            </p>
            <h2 className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services</h2>
            <p className="text-[#1b180e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We offer a wide range of services, including mining and selling minerals such as gold, diamonds, gemstones, and other minerals. We also provide consulting services to
              help our clients maximize the value of their mineral assets.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("/image1.jpeg")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("/image2.jpeg")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("/image3.jpeg")' }}
                ></div>
              </div>
            </div>
            <h2 className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key achievements</h2>
            <p className="text-[#1b180e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Mineral Co. has achieved many milestones over the years. We have been recognized for our commitment to excellence and innovation. Our products have been used in a
              wide range of applications, from jewelry to electronics. We are proud of our accomplishments and look forward to continuing to serve our customers in the years to
              come.
            </p>
            <h2 className="text-[#1b180e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Management team</h2>
            <div className="flex items-center gap-4 bg-[#fcfbf8] px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                style={{ backgroundImage: 'url("/Image4Joe.jpg")' }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1b180e] text-base font-medium leading-normal line-clamp-1">Joel Chesiro</p>
                <p className="text-[#97864e] text-sm font-normal leading-normal line-clamp-2">Founder and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
