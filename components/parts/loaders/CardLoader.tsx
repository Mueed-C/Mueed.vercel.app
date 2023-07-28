import React from "react";

const Card = () => {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden dark:bg-slate-700">
      <div className="w-full h-48 object-cover flex justify-center items-center pulse-placeholder bg-gray-300 dark:bg-gray-500 dark:text-black">
        {" "}
        Loading...
      </div>

      <div className="p-6">
        <div className="p-[0.85rem] mb-2 bg-gray-400 rounded-md animate-pulse"></div>
        <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="p-[0.40rem] mb-[0.40rem] mr-36 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default Card;
