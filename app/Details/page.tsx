"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Main: React.FC = () => {
  const searchParams = useSearchParams();
  const countryName = searchParams.get("name");
  const capital = searchParams.get("capital") || "N/A";
  const borders = searchParams.get("borders")?.split(",") || [];
  const flag = searchParams.get("flag"); 
  const region = searchParams.get("region") || "Unknown";
  const population = searchParams.get("population") || "Unknown";
  const area = searchParams.get("area") || "Unknown";
  const currency = searchParams.get("currency") || "Unknown";
  const topLevelDomain = searchParams.get("topLevelDomain") || "Unknown";
  const languages = searchParams.get("languages")?.split(",") || ["Unknown"];

  if (!countryName) {
    return <p>Select a country to see details</p>;
  }

  return (
    <main>
      <Link href="/">
        <button>Back</button>
      </Link>
      <h1>{countryName}</h1>
      <ul>
        <li>Capital: {capital}</li>
        <li>Borders: {borders.length > 0 && borders[0] !== "" ? borders.join(", ") : "No borders"}</li>
        <li>Languages: {languages.join(", ")}</li>
        <li>
  <img src={decodeURIComponent(flag)} alt={`Flag of ${countryName}`} width={200} height={100} />
</li>

        <li>Region: {region}</li>
        <li>Population: {population}</li>
        <li>Area: {area} km²</li>
        <li>Currency: {currency}</li>
        <li>Top-Level Domain: {topLevelDomain}</li>
      </ul>
    </main>
  );
};

export default Main;
