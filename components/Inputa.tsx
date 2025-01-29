import React from "react";
import { RegionProps } from "@/types"; 
import { InputaProps } from "@/types";
import inputStyle from '../styles/MainPage.module.scss';
import inputTexta from '@/styles/inputa.module.scss';
import { CiSearch } from "react-icons/ci";
const Inputa: React.FC<InputaProps> = ({ txtVal, setTxtVal, region, setRegion }) => {
  const regions: RegionProps = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={inputTexta.AllInputCont}>
      <form className={inputTexta.form}>
        <div className={inputStyle.inputTextCont}>
     <div className={inputTexta.searchIcon}>
          <CiSearch size={20}/>
          </div>
          <div>
        <input
        className={inputTexta.inputTexta}
          type="text"
          value={txtVal}
          id="yoh"
          onChange={(e) => setTxtVal(e.target.value)}
          placeholder="Search for a country..."

        />
        </div>
        </div>
        <div className={inputTexta.inputSeleCont}>
        <select name="fil" value={region} onChange={(e) => setRegion(e.target.value)} className={inputTexta.inputSele}>
          <option value="">All Regions</option>
          {regions.map((region, key) => (
            <option value={region} key={key}>{region}</option>
          ))}
        </select>
        </div>
      </form>
    </div>
  );
};

export default Inputa;
