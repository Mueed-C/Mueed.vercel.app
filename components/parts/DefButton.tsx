import React from "react";
import { AiOutlineMail } from "react-icons/ai";

// DefButton = Default button template

type DLButtonProps = {
  name: string;
};

export const DLButton: React.FC<DLButtonProps> = ({ name }) => {
  return (
    <div className="flex justify-center pb-3.5">
      <button className="transition ease-in-out bg-blue-500 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-500 text-white font-semibold py-1 px-4 border border-blue-500 dark:border-blue-600 hover:border-blue-300 dark:hover:border-blue-400 rounded-full flex items-center duration-300 hover:scale-105">
        {name}
        <AiOutlineMail className="h-5 w-9 ml-3.5 text-black dark:text-slate-800 bg-white dark:bg-slate-200 rounded-full text-xs float-right text-center leading-10" />
      </button>
    </div>
  );
};

export default DLButton;
