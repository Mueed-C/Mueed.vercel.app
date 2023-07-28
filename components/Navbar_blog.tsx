"use client";
import { useEffect, useState } from "react";
import DN_toggle from "./parts/DN_toggle2";
import Link from "next/link";

const Navbar_blog: React.FC = () => {
  // State for the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  // State for dark mode toggle
  const [toggled, setToggled] = useState<boolean>(false);

  // Function to handle dark mode toggle
  const handleClick = () => {
    const newToggledState = !toggled;
    setToggled(newToggledState);
    localStorage.setItem("darkMode", newToggledState ? "true" : "false");
  };

  // Check for the initial dark mode preference from local storage on component mount
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setToggled(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="bg-gray-800 dark:bg-slate-900 rounded-md transition-colors ease-in-out duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* DN_toggle on the left */}
        <div className="flex-shrink-0 absolute">
          <div id="nav-butone" className="scale-[45%] md:scale-[66%]">
            <DN_toggle toggled={toggled} onClick={handleClick} />
          </div>
        </div>

        {/* Centered "HOME" element */}
        <div className="flex-grow flex items-center justify-center">
          <div id="nav-butone">
            <span className="block h-14 text-gray-300 hover:bg-gray-700 dark:hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center">
              <Link href="/">Go Back</Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_blog;
