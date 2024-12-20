import localFont from "next/font/local";
import "./globals.css";

const kontaktFont = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function KontaktLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kontaktFont.variable} ${kontaktFont.variable} kontakt-layout`}>
        <div className="konatakt-container">
          {children}
        </div>
        
      </body>
    </html>
  );
}
