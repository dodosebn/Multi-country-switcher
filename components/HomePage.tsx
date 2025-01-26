import React, { useMemo } from 'react';
import Inputa from './Inputa';
import FirstPage from './FirstPage';
import { HomePageProps } from '@/types';

const HomePage: React.FC<HomePageProps> = ({ txtVal, setTxtVal, setCountryData, jsonData }) => {
  const filteredData = useMemo(() => jsonData.filter((country) =>
    country.name.toLowerCase().includes(txtVal.toLowerCase())
  ), [txtVal, jsonData]);

  return (
    <div>
      <Inputa txtVal={txtVal} setTxtVal={setTxtVal} />
      <main>
        <FirstPage setCountryData={setCountryData} jsonData={filteredData} />
      </main>
    </div>
  );
};

export default HomePage;