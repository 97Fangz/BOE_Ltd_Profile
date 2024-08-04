import React from 'react';
import CompanyInfo from '../components/CompanyInfo';
import Services from '../components/Services';
import History from '../components/History';
//import Team from '../components/Team';

const Home: React.FC = () => {
  return (
    <>
      <CompanyInfo />
      <Services />
      <History />
      {/* <Team /> */}
    </>
  );
};

export default Home;