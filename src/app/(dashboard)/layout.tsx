import type { Metadata } from "next";
import "../styles/navbar.css";
import "../globals.css";

import Nav from "../components/nav";
import Navigation from "../components/navigation";
import { Toaster } from "react-hot-toast";
import Hydrate from "../components/hydrate";
import AuthContextProvider from "../utils/react_auth_context";
import AuthProvider from "../libs/checkAuth";

export const metadata: Metadata = {
  title: "Trippayer - Your Next Travel Buddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Hydrate>
          {/* <AuthProvider> */}
            <Toaster
              toastOptions={{
                style: {
                  background: "#000000",
                  border: "1px solid #fff",
                  fontWeight: "bold",
                  color: "#fff",
                },
              }}
            />
            <Navigation />
            <main className="relative">
              <div className="absolute top-0 left-0 w-full min-h-96 bg-slate-900 -z-10"></div>
              <div className="lg:pl-[300px] z-10">
                <Nav />
                <div className="p-2 md:p-8">{children}</div>
              </div>
            </main>
          {/* </AuthProvider> */}
        </Hydrate>

      </body>
    </html>
  );
}