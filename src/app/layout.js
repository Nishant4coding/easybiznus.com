"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import global from "@/global.module.css";
import MobileNavBar from "@/components/Navbar/MobileView/MobileNavBar";
import TopNav from "@/components/Navbar/TopNav";
import ReduxProvider from "@/Redux/provider";
import { useRouter } from "next/navigation";
import Login from "./login/page";
import Register from "./register/page";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

function RootLayout({ children }) {
  // const [isLogin, setIsLogin] = useState(false);
  // const [loginSwitch, setLoginSwitch] = useState(false);

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
          {/* <>
              {!loginSwitch ? (
                <Login
                  setLoginSwitch={setLoginSwitch}
                  setIsLogin={setIsLogin}
                />
              ) : (
                <Register
                  setLoginSwitch={setLoginSwitch}
                  setIsLogin={setIsLogin}
                />
              )}
            </> */}
        </body>
      </ReduxProvider>
    </html>
  );
}

export default RootLayout;
