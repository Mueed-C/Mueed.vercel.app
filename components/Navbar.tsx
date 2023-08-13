import { useEffect, useState } from "react";
import DN_toggle from "./parts/DN_toggle2";

const Navbar: React.FC<{ handleTabChange: (tabName: string) => void }> = ({
  handleTabChange,
}) => {
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
    <nav className="bg-gray-800 dark:bg-slate-900 rounded-b-md md:rounded-md transition-colors ease-in-out duration-1000 fixed md:relative top-0 z-50 w-full md:w-auto -translate-x-5 md:-translate-x-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo */}
              <div id="nav-butone" className="scale-[45%] md:scale-[66%] ">
                {/* <span className="text-white font-bold text-xl">My Personal Site :)</span> */}
                <DN_toggle toggled={toggled} onClick={handleClick} />
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4 flex-grow text-center ">
                {/* Navigation Links */}
                <div
                  id="nav-butone"
                  onClick={() => {
                    handleTabChange("home");
                    isMenuOpen && toggleMenu();
                  }}
                >
                  <span className="block h-14 text-gray-300 hover:bg-gray-700 dark:hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
                    Home
                  </span>
                </div>
                <div
                  id="nav-butone"
                  onClick={() => {
                    handleTabChange("resume");
                    isMenuOpen && toggleMenu();
                  }}
                >
                  <span className="block h-14 text-gray-300 hover:bg-gray-700 dark:hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    R&eacute;sum&eacute;
                  </span>
                </div>
                {/* More Options */}
                <div className="ml-4 relative group">
                  <button
                    onClick={toggleMenu}
                    className="text-gray-300 hover:bg-gray-700   dark:hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                    <svg
                      className="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-300 transition-colors duration-150"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5zM5.646 8.646a.5.5 0 0 1 .708 0L10 12.293l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="origin-top-right absolute z-20 mt-2 -right-20  w-56 rounded-md shadow-lg bg-gray-700 dark:bg-slate-800 ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1 text-center"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div
                          id="nav-butone"
                          onClick={() => {
                            handleTabChange("research");
                            toggleMenu();
                          }}
                        >
                          <span
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 
                            dark:hover:bg-slate-700 hover:text-white"
                            role="menuitem"
                          >
                            Research
                          </span>
                        </div>
                        {/* <div id="nav-butone" onClick={() => {handleTabChange("alumni"); toggleMenu();}}>
                                    <span
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white"
                                        role="menuitem"
                                    >
                                        Alumni Info
                                    </span>
                                    </div> */}
                      </div>
                    </div>
                  )}
                </div>
                {/* Contact */}
                <div
                  id="nav-butone"
                  onClick={() => {
                    handleTabChange("contact");
                    isMenuOpen && toggleMenu();
                  }}
                >
                  <span className="block h-14 text-gray-300 hover:bg-gray-700 dark:hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button - TOGGLE BASED ON MENU STATE*/}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 dark:hover:bg-slate-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              // might need to double check if I messed anything  up here regarding dark mode ^
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu CONTENT*/}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 left-0 mx-8 right-0 bg-gray-700 dark:bg-slate-800 rounded-b-lg">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 space-y-1">
              <div
                id="nav-butone"
                onClick={() => {
                  handleTabChange("home");
                  toggleMenu();
                }}
              >
                <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </span>
              </div>
              <div
                id="nav-butone"
                onClick={() => {
                  handleTabChange("resume");
                  toggleMenu();
                }}
              >
                <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  R&eacute;sum&eacute;
                </span>
              </div>
              <div className="cursor-default">
                <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blogs
                </span>
              </div>
              {/* Nested Dropdown */}
              <div className="pl-6">
                <div
                  id="nav-butone"
                  onClick={() => {
                    handleTabChange("research");
                    toggleMenu();
                  }}
                >
                  <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Research Blog
                  </span>
                </div>
                {/* <div id="nav-butone" onClick={() => {handleTabChange("alumni"); toggleMenu();}}>
                    <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Alumni Blog
                    </span>
                </div> */}
              </div>
              <div
                id="nav-butone"
                onClick={() => {
                  handleTabChange("contact");
                  toggleMenu();
                }}
              >
                <span className="text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
