"use client";

import React from "react";
import { RegionProps } from "@/types"; 
import { InputaProps } from "@/types";

const Inputa: React.FC<InputaProps> = ({ txtVal, setTxtVal, region, setRegion }) => {
  const regions: RegionProps = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <form>
        <input
          type="text"
          value={txtVal}
          id="yoh"
          onChange={(e) => setTxtVal(e.target.value)}
          placeholder="Search for a country..."
        />
        <select name="fil" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">All Regions</option>
          {regions.map((region, key) => (
            <option value={region} key={key}>{region}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Inputa;
