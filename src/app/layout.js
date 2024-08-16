"use client";

import MobileNavBar from "@/components/Navbar/MobileView/MobileNavBar";
import TopNav from "@/components/Navbar/TopNav";
import global from "@/global.module.css";
import ReduxProvider from "@/Redux/provider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className} suppressHydrationWarning>
          <Toaster />
          <>
            <div className={global.desktop}>
              <TopNav />
            </div>
            <div className={global.mobile}>
              <MobileNavBar />
            </div>
            {children}
          </>
        </body>
      </ReduxProvider>
    </html>
  );
}

export default RootLayout;
