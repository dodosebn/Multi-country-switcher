'use client';
import React from 'react';
import Image from 'next/image';
import { mainPP } from '@/types';
const Main: React.FC<mainPP> = ({ countryData }) => {
  if (!countryData) {
    return null; 
  }

  return (
    <main>
      <h1>{countryData.name}</h1>
      <p>Capital: {countryData.capital}</p>
      <p>Region: {countryData.region}</p>
      <p>Subregion: {countryData.subregion}</p>
      <p>Population: {countryData.population?.toLocaleString() ?? 'N/A'}</p>
      <p>Top-Level Domain: {countryData.topLevelDomain?.join(', ') ?? 'N/A'}</p>
      <p>Timezones: {countryData.timezones?.join(', ') ?? 'N/A'}</p>
      <p>Calling Codes: +{countryData.callingCodes?.join(', +') ?? 'N/A'}</p>
      <p>Native Name: {countryData.nativeName}</p>
      <p>Currency: {countryData.currencies?.map(c => `${c.name} (${c.symbol})`).join(', ') ?? 'N/A'}</p>
      <p>Languages: {countryData.languages?.map(l => l.name).join(', ') ?? 'N/A'}</p>
      <p>Borders: {countryData.borders?.length > 0 ? countryData.borders.join(', ') : 'None'}</p>
      <Image src={countryData.flags?.png} alt={`Flag of ${countryData.name}`} />
    </main>
  );
};

export default Main;
