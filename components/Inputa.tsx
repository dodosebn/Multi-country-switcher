import React, { useState } from "react";
import { RegionProps } from "@/types"; 
import { InputaProps } from "@/types";

const Inputa: React.FC<InputaProps> = ({ txtVal, setTxtVal }) => {
  const regions: RegionProps = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [region, setRegion] = useState('');
  
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
        <select name="fil" onChange={(e) => setRegion(e.target.value)}>
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
