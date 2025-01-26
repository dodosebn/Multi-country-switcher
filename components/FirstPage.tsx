import React from 'react';
import { FirstPageProps } from '@/types';

const FirstPage: React.FC<FirstPageProps> = ({ setCountryData, jsonData }) => {
  const handleCountryClick = (country: any) => {
    console.log("Country clicked:", country);
    setCountryData(country);
  };
  
  return (
    <div id="countryBody">
      {jsonData.map((item) => (
        <div key={item.name} onClick={() => handleCountryClick(item)}>
          <img src={item.flags.png} alt={`Flag of ${item.name}`} width={50} height={30} />
          <h1>{item.name}</h1>
          <p>{item.population}</p>
          <p>{item.region}</p>
          <p>{item.capital}</p>
        </div>
      ))}
    </div>
  );
};
export default FirstPage;
