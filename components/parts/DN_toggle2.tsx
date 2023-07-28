// components/DN_toggle.tsx

import React, { useEffect, useState } from "react";

interface ToggleProps {
  toggled: boolean;
  onClick: () => void;
}

const DN_toggle: React.FC<ToggleProps> = ({ toggled, onClick }) => {
  /**
   * Function to toggle dark mode and handle local storage
   */
  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (isDarkMode) {
      localStorage.setItem("darkMode", "false");
    } else {
      localStorage.setItem("darkMode", "true");
    }
    document.documentElement.classList.toggle("dark");
    onClick();
  };

  // Check for the initial dark mode preference from local storage on component mount
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div
      onClick={toggleDarkMode}
      className={`toggle_main ${toggled ? "night" : ""}`}
    >
      <div className="toggle_switch">
        <div className="toggle_crater" />
        <div className="toggle_crater" />
      </div>
      <div>
        <div>
          <div className="toggle_shape sm"></div>
          <div className="toggle_shape sm"></div>
          <div className="toggle_shape md"></div>
          <div className="toggle_shape lg"></div>
        </div>
      </div>
    </div>
  );
};

export default DN_toggle;
