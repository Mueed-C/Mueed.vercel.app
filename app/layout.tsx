import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mueed Chaudhary - My Personal Portfolio!",
  description: "Resume Website",
  keywords: "MBBS, Medical Student, Resume, Portfolio, Orthopedics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQHRR141EC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DQHRR141EC');
        `}
      </Script>

      <html lang="en" className=" ">
        <body
          className={`bg-gradient-to-tr from-[#fff_8%] via-[#97E0FF_40%] to-[#fefff0_90%] bg-no-repeat bg-[300%,300%] animate-wave dark:bg-gradient-to-tr dark:from-[#1e1b4b_8%] dark:via-[#0f172a_40%] dark:to-[#172554_90%] dark:bg-no-repeat dark:bg-[300%,300%] dark:animate-wave           
          dark:bg-slate-950 bg-slate-100  ${inter.className}  antialiased `}
        >
          <div className="transition-colors duration-700 ease-in-out">
            {children}
          </div>
          <Analytics />
        </body>
      </html>
    </>
  );
}
