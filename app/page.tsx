"use client";

import { HomePage } from "@/components";
import Data from '@/data.json';
import { ForAllProps } from '@/types';
import { useState } from "react";

const jsonData: ForAllProps[] = Data as ForAllProps[];

export default function Home() {
  const [countryData, setCountryData] = useState<ForAllProps | null>(null);
  const [txtVal, setTxtVal] = useState(''); 
  const [region, setRegion] = useState(''); 

  // Filter countries based on search text and region
  const filteredData = jsonData.filter((country) => {
    const matchesText = country.name.toLowerCase().includes(txtVal.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesText && matchesRegion;
  });

  return (
    <div>
      <HomePage 
        txtVal={txtVal} 
        setTxtVal={setTxtVal} 
        setCountryData={setCountryData} 
        jsonData={filteredData} 
        region={region} 
        setRegion={setRegion} 
        countryData={countryData}
      />
    </div>
  );
}
