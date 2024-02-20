"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import global from "@/global.module.css";
import MobileNavBar from "@/components/Navbar/MobileView/MobileNavBar";
import TopNav from "@/components/Navbar/TopNav";
import ReduxProvider from "@/Redux/provider";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
      router.push("/register");
    }
  });

  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          {!isLogin && (
            <>
              <div className={global.desktop}>
                <TopNav />
              </div>
              <div className={global.mobile}>
                <MobileNavBar />
              </div>
            </>
          )}
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}

export default RootLayout;
