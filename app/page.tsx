"use client";
import { HomePage, ConstTop } from "@/components";
import Data from "@/data.json";
import { ForAllProps } from "@/types";
import { useState, useEffect } from "react";
import MainStyle from "@/styles/MainPage.module.scss";
const jsonData: ForAllProps[] = Data as ForAllProps[];

export default function Home() {
  const [countryData, setCountryData] = useState<ForAllProps | null>(null);
  const [txtVal, setTxtVal] = useState("");
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 97%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"
    );
  }, [darkMode]);

  const filteredData = jsonData.filter((country) => {
    const matchesText = country.name
      .toLowerCase()
      .includes(txtVal.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesText && matchesRegion;
  });

  return (
    <><ConstTop darkMode={darkMode} setDarkMode={setDarkMode} />
    <div
      className={MainStyle.bodyWrap}
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className={MainStyle.bodyRule1}>
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
    </div>
    </>
  );
}
