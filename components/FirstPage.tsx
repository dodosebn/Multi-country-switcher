"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { FirstPageProps } from '@/types';
import MainStyle from '@/styles/MainPage.module.scss';
const FirstPage: React.FC<FirstPageProps> = ({ setCountryData, jsonData }) => {
  const router = useRouter();

  const handleCountryClick = (country: any) => {
    console.log("Country clicked:", country);
    setCountryData(country); 

    const mainShows = new URLSearchParams({
      name: country.name,
      capital: country.capital || "N/A",
      borders: country.borders?.join(",") || "None",
      flag: encodeURIComponent(country.flags.png), // Encode URL to avoid errors
      region: country.region || "Unknown",
      population: country.population?.toString() || "Unknown",
      area: country.area?.toString() || "Unknown",
      topLevelDomain: country.topLevelDomain?.[0] || "Unknown",
      currency: country.currencies?.[0]?.name || "Unknown", // Fix currency access
      languages: country.languages?.map((lang: any) => lang.name).join(", ") || "Unknown" // Fix language access
    }).toString();

    router.push(`/Details?${mainShows}`);
  };
  
  return (
    <div id="countryBody" className={MainStyle.bodyRule1}>
      {jsonData.map((item) => (
        <div className={MainStyle.firstPage} key={item.name} onClick={() => handleCountryClick(item)}>
          <img src={item.flags.png} alt={`Flag of ${item.name}`} />
          <div className={MainStyle.firstDetails}>
          <h1>{item.name}</h1>
          <p>Population:<span>{item.population.toLocaleString()}</span></p>
          <p>Region: <span>{item.region}</span></p>
          <p>Capital: <span>{item.capital}</span></p>
          </div>
               </div>
      ))}
    </div>
  );
};

export default FirstPage;
