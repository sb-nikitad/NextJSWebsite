import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sportsbox AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="my-script">
        {`
         ( function() { xhr = new XMLHttpRequest(); xhr.open( "POST", "https://cfapi.communitybox.co/bootstrap/revision", true ); xhr.onload = function() { if (xhr.readyState === 4 && xhr.status === 200) { var returnObj = JSON.parse(xhr.responseText); if( returnObj.hasOwnProperty("err") ) { console.error(returnObj.err); } else { var r = returnObj.revision; var l = document.createElement("script"); l.src = "https://dashboard.communitybox.co/embed/"+r+"/cbebloader-"+r+".js"; document.head.appendChild( l ); }; }; }; xhr.send( "2480bc81-3988-4aea-ace5-d344b7c6f8fd" ); })(); 
        `}
      </Script>
      <body
        className={`${lato.className} box-border w-full h-full bg-sb-darkblue text-white`}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics
        gaId={
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
            ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
            : ""
        }
      />
    </html>
  );
}
