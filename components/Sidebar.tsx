"use client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import DLButton from "./parts/DLButton";
import Image from "next/image";
import dp2 from "@/public/dp2.jpg";
import dp3 from "@/public/dp3.jpg";

const Sidebar = () => {
  const handleDownload = () => {
    const pdfFile = "/MueedChaudhary_ClinicalCV_Simple.pdf";
    const anchor = document.createElement("a");
    anchor.href = pdfFile;
    anchor.download = `${name}.pdf`;
    anchor.click();
  };
  return (
    <section
      id="sidebar_bro"
      className="grid gap-8 justify-center pb-5 pt-20 md:py-0"
    >
      <div className=" bg-white dark:bg-gray-700  text-base text-black dark:text-slate-200 rounded-xl h-min max-w-xs flex-initial inline-block shadow-xl transition-colors ease-out duration-500">
        <div className="leading-4 p-5 -mb-5">
          <h1 className="uppercase font-bold block text-base">
            Mueed Chaudhary
          </h1>
          <h2 className="text-sm text-gray-500 dark:text-slate-400 inline-block">
            Final Year Medical Student
          </h2>
        </div>

        <Image
          className="profile-image-clip-path"
          src={dp3}
          alt="My Profile Picture"
          width={500}
          height={500}
          placeholder="blur"
        />

        <ul
          id="my-info"
          className=" space-y-1 text-slate-400  list-none border-l border-slate-400 dark:border-slate-300 mt-2 ml-9 pr-4"
        >
          <li className="relative">
            <div className="w-12 h-12 bg-blue-500 dark:bg-blue-700 rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <BsPersonCircle className=" transition-all ease-in-out duration-150 text-slate-100 text-3xl hover:text-4xl" />
            </div>
          </li>

          <li className="pt-6">
            <p>
              <span>Birthday:</span> 29/08/1998
            </p>
          </li>
          <li>
            <p>
              <span>Home:</span> Oceanside, CA 92057
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> Mueed.WMC@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>Step 1:</span> TBA
            </p>
          </li>
          <li>
            <p>
              <span>Step 2:</span> TBA
            </p>
          </li>
        </ul>
        <div className="mt-5 text-xs">
          <DLButton name="Download CV" onClick={handleDownload} />
          {/* <DLButton name="Custom CV" /> */}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
