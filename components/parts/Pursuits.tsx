import React from "react";

interface PursuitsProps {
  icon: React.ReactNode; // Assuming you will pass an icon component or JSX here
  title: string;
  description: string;
}

const Pursuits: React.FC<PursuitsProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full ">
      <div
        id="pursuit"
        className="mb-7 bg-white dark:bg-gray-700 rounded-lg p-5 shadow-lg min-h-min flex flex-row items-center hover:scale-105  transition-transform ease-[cubic-bezier(0.19, -0.01, 0, 1.01)] duration-300 "
      >
        <div
          id="icon"
          className="text-4xl mr-5 hover:scale-150 transition-transform ease-in-out duration-300 hover:text-slate-600 dark:hover:text-blue-200 text-slate-500 dark:text-slate-300"
        >
          {icon}
        </div>
        <div>
          <span id="pursuit_title">{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Pursuits;
