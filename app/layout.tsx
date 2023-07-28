import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";

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
          className={`dark:bg-slate-950 bg-slate-100 transition-colors duration-700 ease-in-out ${inter.className}  antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
