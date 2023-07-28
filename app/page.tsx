"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  // Setup Navbar Functionality
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  // Navbar Funcitonality KHATAM

  // Now for main content
  return (
    <>
      <Head>
        {/* Metadata */}
        <title>Mueed - My Personal Portfolio!</title>
        <meta
          name="description"
          content={
            "My Own Resume Website where I can share details about various projects =)"
          }
        />
        <meta
          name="keywords"
          content={"MBBS, Medical Student, Resume, Portfolio, Orthopedics"}
        />
        {/* Add more meta tags as needed */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
    page_path: window.location.pathname
  });`,
          }}
        />
      </Head>
      <div className="mx-5 gap-4 md:flex md:mt-10 justify-center ">
        <Sidebar />
        {/* DONE  DARKMODE KARO
                             SHADOWS???

LP CHECK CSS

      :  RESUME loaders sirf FUCK IT
                NAVBAR - maybe do a 1through
?  MAIANCONTENT
DEF BUTTON
SECTION -> TODO: CSS
FIXME:  CARD -> CSS and other. focus on base then work on the overlay

BLOGS

*/}
        {/* DONE add footer
DONE finish blog functionality : wohi toggle boolean walla
DONE add CV and Email links
add badges to the fucking thing of blogs LATER

responsive design<------------------
LOCAL STORAGE FUNCTIONALITY FIXME: almost, save "activeTab"



================================

upload PDF's ------ DONE
fix certification IMAGES
local storage for activeTab  ----- FUCK THIS FOR NOW
google analytics
metadata
*/}
        <div className=" flex flex-col flex-initial md:basis-3/4 lg:basis-4/6 xl:basis-2/4 gap-4 ">
          <Navbar handleTabChange={handleTabChange} />
          <MainContent activeTab={activeTab} />{" "}
          {/* Render the MainContent component */}
          <Footer />
        </div>
      </div>
    </>
  );
}
