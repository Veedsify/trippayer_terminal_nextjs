import { Toaster } from "react-hot-toast";
import "../globals.css";
import Hydrate from "../components/hydrate";

export const metadata = {
  title: "Login into trippayer",
  description: "Generated by Next.js",
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
          <Toaster />
          {children}
        </Hydrate>
      </body>
    </html>
  );
}
