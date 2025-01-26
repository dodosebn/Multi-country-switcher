'use client';

import { Main, HomePage } from "@/components";
import Data from '@/data.json';
import { ForAllProps } from '@/types';
import { useState } from "react";

const jsonData: ForAllProps[] = Data as ForAllProps[];

export default function Home() {
  const [countryData, setCountryData] = useState<ForAllProps | null>(null);
  const [txtVal, setTxtVal] = useState('');

  return (
    <div>
      <HomePage txtVal={txtVal} setTxtVal={setTxtVal} countryData={countryData} setCountryData={setCountryData} jsonData={jsonData}/>
      <Main 
        countryData={countryData} 
      />
    </div>
  );
}