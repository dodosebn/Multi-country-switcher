"use client";
import React, { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import MainStyle from "@/styles/MainPage.module.scss";
import { ConstTopProps } from "@/types";

const ConstTop: React.FC<ConstTopProps> = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--const-top-bg-color",
      darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
    );
  }, [darkMode]);

  return (
    <div
      className={MainStyle.constTop}
      style={{
        backgroundColor: "var(--const-top-bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className={MainStyle.constRule1}>
        <div>
          <h3>Where in the World?</h3>
        </div>
        <div className={MainStyle.constMode}>
          {darkMode ? (
            <CiLight fontSize={30} onClick={() => setDarkMode(false)} />
          ) : (
            <FaMoon fontSize={30} onClick={() => setDarkMode(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstTop;
