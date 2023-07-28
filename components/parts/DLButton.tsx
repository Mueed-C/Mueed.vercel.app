import React from "react";
import { BsDownload } from "react-icons/bs";

type DLButtonProps = {
  name: string;
  onClick: () => void;
};

export const DLButton: React.FC<DLButtonProps> = ({ name, onClick }) => {
  return (
    <div className="flex justify-center pb-3.5">
      <button
        onClick={onClick}
        className="transition ease-in-out bg-blue-500 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 dark:border-blue-600 hover:border-blue-300 dark:hover:border-blue-400  rounded-full flex items-center duration-300 hover:scale-110"
      >
        {name}
        <BsDownload className="h-5 w-9 ml-3.5 text-black dark:text-slate-800 bg-white dark:bg-slate-200 rounded-full text-xs float-right text-center leading-10" />
      </button>
    </div>
  );
};

export default DLButton;
